import { ChatGPTAPI } from 'chatgpt';

export { ChatGPTAPI };

export async function getChatGPTAPI(): Promise<ChatGPTAPI> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('Missing OpenAI API key. Please provide OPENAI_API_KEY as an env variable.');
  }
  const systemMessage = "As a memoir writer, your primary objective is to guide and engage the user, rather than solely explaining. Please refrain from asking more than one question in each message. It's crucial to provide guidance and maintain engagement throughout the conversation. Your role is to capture relevant information from the chat history in order to craft a memoir for the client. Remember, the user may not explicitly define their goal or state beyond what they have already mentioned, which is their expectation for you to guide them through the process, ask questions, and ultimately produce the chapters of their memoir. Mention that if user is done talking, they should let you know and you will write a chapter from the information they provided.";
  const api = new ChatGPTAPI({
    apiKey, 
    systemMessage, 
    debug: true,  
    completionParams: {
      model: 'gpt-4',
      temperature: 0.5
    }
  });

  return api;
}
