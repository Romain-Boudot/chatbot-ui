export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  Wizard7B = '/models/WizardLM-7B-uncensored.ggmlv3.q5_0.bin',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.Wizard7B;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.Wizard7B]: {
    id: OpenAIModelID.Wizard7B,
    name: 'Wizard 7B',
    maxLength: 12000,
    tokenLimit: 4000,
  }
};
