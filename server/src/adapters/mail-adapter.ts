export interface SendMailData {
  subject: string;
  body: string;
}

export interface MailAdapter {
  sendMain: (data: SendMailData) => Promise<void>;
}