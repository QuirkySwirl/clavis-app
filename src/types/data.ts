// Core type definitions for the Clavis application data

export interface DQDimension {
  id: string; // Unique identifier (e.g., "DQ001")
  damaId: string; // DAMA identifier (e.g., "DAMA-ACC-01")
  nr: string; // Number (e.g., "1.1")
  dimension: string; // Name of the dimension (e.g., "Accuracy")
  dataConcept: string; // Data Concept (e.g., "Data values")
  definition: string;
  unitOfMeasure: string;
  examplePoor?: string; // Optional: Example of poor quality
  exampleGood?: string; // Optional: Example of good quality
  icon?: string; // Optional: Icon identifier (e.g., "bi-check-circle")
  category?: string; // Broader category, seems to be same as dataConcept from docs
  // Add other fields from dq_dimensions.json as needed
}

// Interface for the overall structure of dq_dimensions.json if it's an object with a key
// export interface DQDimensionsFile {
//   dimensions: DQDimension[];
// }

// Add other interfaces for other JSON files as we build out utilities:
// e.g., BusinessLifecycle, BusinessObjective, KPI, StrategicObjective, EnvironmentalFactor, ProjectCharterTemplate etc.

export type JourneyType = 'LifecyclePainPoint' | 'KPIImprovement' | 'StrategicOrAIInitiative' | 'ExploreDimensions' | null;

export interface EnvironmentalFactorSelection {
  factorId: string;
  factorName: string;
}

export interface ConceptualUserContext {
  journeyType: JourneyType;
  selectedLifecycleId?: string;
  selectedLifecycleName?: string;
  selectedStageId?: string;
  selectedStageName?: string;
  selectedPainPoints?: string[];
  selectedKPIId?: string;
  selectedKPIName?: string;
  selectedStrategicObjectiveId?: string;
  selectedStrategicObjectiveName?: string;
  selectedAIFactorId?: string;
  selectedAIFactorName?: string;
  identifiedDamaIds?: string[];
  environmentalFactors?: EnvironmentalFactorSelection[];
}
