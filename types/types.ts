// types.ts

import { ID } from "node-appwrite";

export class InputFile {
  $id: string;
  name: string;
  mimeType: string;
  sizeOriginal: number;
  file: Blob;

  constructor(id: string, name: string, mimeType: string, sizeOriginal: number, file: Blob) {
    this.$id = id;
    this.name = name;
    this.mimeType = mimeType;
    this.sizeOriginal = sizeOriginal;
    this.file = file;
  }

  static fromBlob(blob: Blob, fileName: string): InputFile {
    return new InputFile(ID.unique(), fileName, blob.type, blob.size, blob);
  }
}

export interface RegisterUserParams {
  identificationDocument?: Map<string, any>;
  // Define other parameters as needed
}
