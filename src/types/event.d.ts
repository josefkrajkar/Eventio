import type { ProfileType } from "./profile";

export type EventType = {
  attendees: ProfileType[];
  capacity: number;
  createdAt: string;
  description: string;
  id: string;
  owner: ProfileType;
  ownerId: string;
  startsAt: string;
  title: string;
  updatedAt: string;
}

export type NewEventType = {
  title: string;
  description: string;
  startsAt: string;
  capacity: number;
}
