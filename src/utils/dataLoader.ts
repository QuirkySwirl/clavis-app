// Utility functions for loading and accessing data from JSON files

/**
 * Fetches a JSON data file from the public/data directory.
 * @param fileName The name of the JSON file (e.g., "dq_dimensions.json")
 * @returns A promise that resolves to the parsed JSON data, or null if an error occurs.
 */
export const loadJsonData = async <T = unknown>(fileName: string): Promise<T | null> => {
  try {
    const response = await fetch(`/data/${fileName}`);
    if (!response.ok) {
      console.error(`Failed to load ${fileName}: ${response.statusText}`);
      return null;
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching or parsing ${fileName}:`, error);
    return null;
  }
};

import { DQDimension } from '@/types/data';

/**
 * Fetches and returns all Data Quality Dimensions.
 * @returns A promise that resolves to an array of DQDimension objects, or null if an error occurs.
 */
export const getDQDimensions = async (): Promise<DQDimension[] | null> => {
  return loadJsonData<DQDimension[]>('dq_dimensions.json');
};

/**
 * Fetches details for a specific Data Quality Dimension by its damaId.
 * @param damaId The DAMA ID of the dimension to fetch.
 * @returns A promise that resolves to the DQDimension object, or undefined if not found or an error occurs.
 */
export const fetchDimensionDetails = async (damaId: string): Promise<DQDimension | undefined> => {
  const dimensions = await getDQDimensions();
  if (!dimensions) {
    return undefined;
  }
  return dimensions.find(dim => dim.damaId === damaId);
};

// We will add more specific data loading and querying functions here,
// such as:
// - getDimensionsForLifecycleStage(lifecycleId: string, stageId: string, painPointsArray: string[])
// - getDimensionsForKPI(metricId: string)
// - populateCharterTemplate(templateType: string, userContext: any)
// etc.
