'use client';

import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { ConceptualUserContext, JourneyType, EnvironmentalFactorSelection } from '@/types/data';

// Define the state structure
interface UserState {
  context: ConceptualUserContext;
}

// Define action types
type ActionType =
  | { type: 'SET_JOURNEY_TYPE'; payload: JourneyType }
  | { type: 'SET_LIFECYCLE_SELECTION'; payload: { id?: string; name?: string } }
  | { type: 'SET_STAGE_SELECTION'; payload: { id?: string; name?: string } }
  | { type: 'SET_PAIN_POINTS'; payload: string[] }
  | { type: 'SET_KPI_SELECTION'; payload: { id?: string; name?: string } }
  | { type: 'SET_STRATEGIC_OBJECTIVE_SELECTION'; payload: { id?: string; name?: string } }
  | { type: 'SET_AI_FACTOR_SELECTION'; payload: { id?: string; name?: string } }
  | { type: 'SET_IDENTIFIED_DAMA_IDS'; payload: string[] }
  | { type: 'ADD_ENVIRONMENTAL_FACTOR'; payload: EnvironmentalFactorSelection }
  | { type: 'REMOVE_ENVIRONMENTAL_FACTOR'; payload: string } // factorId
  | { type: 'RESET_CONTEXT' };

// Initial state
const initialState: UserState = {
  context: {
    journeyType: null,
    selectedPainPoints: [],
    identifiedDamaIds: [],
    environmentalFactors: [],
  },
};

// Reducer function
const userContextReducer = (state: UserState, action: ActionType): UserState => {
  switch (action.type) {
    case 'SET_JOURNEY_TYPE':
      return { ...state, context: { ...initialState.context, journeyType: action.payload } }; // Reset context on new journey
    case 'SET_LIFECYCLE_SELECTION':
      return { ...state, context: { ...state.context, selectedLifecycleId: action.payload.id, selectedLifecycleName: action.payload.name } };
    case 'SET_STAGE_SELECTION':
      return { ...state, context: { ...state.context, selectedStageId: action.payload.id, selectedStageName: action.payload.name } };
    case 'SET_PAIN_POINTS':
      return { ...state, context: { ...state.context, selectedPainPoints: action.payload } };
    case 'SET_KPI_SELECTION':
      return { ...state, context: { ...state.context, selectedKPIId: action.payload.id, selectedKPIName: action.payload.name } };
    case 'SET_STRATEGIC_OBJECTIVE_SELECTION':
      return { ...state, context: { ...state.context, selectedStrategicObjectiveId: action.payload.id, selectedStrategicObjectiveName: action.payload.name } };
    case 'SET_AI_FACTOR_SELECTION':
      return { ...state, context: { ...state.context, selectedAIFactorId: action.payload.id, selectedAIFactorName: action.payload.name } };
    case 'SET_IDENTIFIED_DAMA_IDS':
      return { ...state, context: { ...state.context, identifiedDamaIds: action.payload } };
    case 'ADD_ENVIRONMENTAL_FACTOR':
      return {
        ...state,
        context: {
          ...state.context,
          environmentalFactors: [...(state.context.environmentalFactors || []), action.payload],
        },
      };
    case 'REMOVE_ENVIRONMENTAL_FACTOR':
      return {
        ...state,
        context: {
          ...state.context,
          environmentalFactors: (state.context.environmentalFactors || []).filter(factor => factor.factorId !== action.payload),
        },
      };
    case 'RESET_CONTEXT':
      return initialState;
    default:
      return state;
  }
};

// Create context
interface UserContextProps {
  state: UserState;
  dispatch: Dispatch<ActionType>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

// Provider component
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userContextReducer, initialState);
  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

// Custom hook to use the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};
