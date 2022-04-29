import { IConfessionContext } from "../../context/ConfessionContext";

export const validConfession = (confession: IConfessionContext): boolean => {
  return (
    validSubject(confession.subject) &&
    validReason(confession.reasonForContact) &&
    validConfessionText(confession.confession)
  );
};

const validSubject = (subject: string): boolean => {
  return subject.length > 0;
};

const validReason = (reason: string): boolean => {
  return reason !== "select" && reason.length > 0;
};

const validConfessionText = (confession: string): boolean => {
  return confession.length > 0;
};
