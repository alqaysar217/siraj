'use server';
/**
 * @fileOverview An AI-powered academic assistant flow.
 *
 * - aiAcademicAssistant - A function that provides explanations for complex topics or answers student questions.
 * - AiAcademicAssistantInput - The input type for the aiAcademicAssistant function.
 * - AiAcademicAssistantOutput - The return type for the aiAcademicAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiAcademicAssistantInputSchema = z.object({
  courseContent: z
    .string()
    .describe("The content of the course module related to the student's question."),
  studentQuestion: z.string().describe("The student's question about the course content or a complex topic."),
});
export type AiAcademicAssistantInput = z.infer<typeof AiAcademicAssistantInputSchema>;

const AiAcademicAssistantOutputSchema = z.object({
  explanation: z.string().describe("The AI-generated explanation or answer to the student's question."),
});
export type AiAcademicAssistantOutput = z.infer<typeof AiAcademicAssistantOutputSchema>;

export async function aiAcademicAssistant(
  input: AiAcademicAssistantInput
): Promise<AiAcademicAssistantOutput> {
  return aiAcademicAssistantFlow(input);
}

const academicAssistantPrompt = ai.definePrompt({
  name: 'academicAssistantPrompt',
  input: { schema: AiAcademicAssistantInputSchema },
  output: { schema: AiAcademicAssistantOutputSchema },
  prompt: `You are an AI-powered academic assistant, acting as a private tutor for students. Your goal is to provide clear, concise, and helpful explanations for complex topics or answer specific questions based on the provided course content.

Course Content:
{{{courseContent}}}

Student's Question:
{{{studentQuestion}}}

Please provide a detailed explanation or answer to the student's question, using only the information available in the Course Content if possible. If the question requires external knowledge, state that you are using external knowledge. Ensure your response is easy to understand for a student.`,
});

const aiAcademicAssistantFlow = ai.defineFlow(
  {
    name: 'aiAcademicAssistantFlow',
    inputSchema: AiAcademicAssistantInputSchema,
    outputSchema: AiAcademicAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await academicAssistantPrompt(input);
    return output!;
  }
);
