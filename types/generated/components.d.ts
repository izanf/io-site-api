import type { Schema, Attribute } from '@strapi/strapi';

export interface SpeakerSpeaker extends Schema.Component {
  collectionName: 'components_speaker_speakers';
  info: {
    displayName: 'Speaker';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    photo: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'speaker.speaker': SpeakerSpeaker;
    }
  }
}
