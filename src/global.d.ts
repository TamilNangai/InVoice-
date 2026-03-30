// export {};

// declare global {
//   interface Window {
//     electron: {
//       send: (channel: string, data?: any) => void;
//       on: (channel: string, func: (...args: any[]) => void) => void;
//       off: (channel: string, func: (...args: any[]) => void) => void;
//       invoke: (channel: string, data?: any) => Promise<any>;
//     };
//   }
// }

export {};

declare global {
  interface Window {
    electronAPI: {
      openEmail: (data: {
        to: string;
        subject?: string;
        body?: string;
      }) => Promise<{ success: boolean }>;
    };

    electron: {
      send: (channel: string, data?: any) => void;
      on: (channel: string, func: (...args: any[]) => void) => void;
      off: (channel: string, func: (...args: any[]) => void) => void;
      invoke: (channel: string, data?: any) => Promise<any>;
    };
  }
}
interface Window {
  electronAPI: {
    openEmail: (data: { to: string; subject?: string; body?: string }) => Promise<{ success: boolean }>;
    sendInvoicePDF: (data: { to: string; subject: string; body: string; pdfBase64: string; filename: string }) => Promise<{ success: boolean; error?: string }>;
  };
}