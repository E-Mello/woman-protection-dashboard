// src/types/index.ts

export interface Chat {
    id: string;
    userName: string;
    status: 'pendente' | 'cancelado' | 'emAndamento' | 'finalizado';
  }
  
  