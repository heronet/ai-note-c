import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY!;

const pinecone = new Pinecone({
  environment: "gcp-starter",
  apiKey: apiKey,
});

export const notesIndex = pinecone.Index("ai-note");
