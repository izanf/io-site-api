import type { Schema, Attribute } from '@strapi/strapi';

export interface SpeakerSpeaker extends Schema.Component {
  collectionName: 'components_speaker_speakers';
  info: {
    displayName: 'Speaker';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface SponsorSponsor extends Schema.Component {
  collectionName: 'components_sponsor_sponsors';
  info: {
    displayName: 'Sponsor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    type: Attribute.Enumeration<['gold', 'silver', 'bronze', 'helper']>;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'speaker.speaker': SpeakerSpeaker;
      'sponsor.sponsor': SponsorSponsor;
    }
  }
}
