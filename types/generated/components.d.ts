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

export interface SponsorSponsor extends Schema.Component {
  collectionName: 'components_sponsor_sponsors';
  info: {
    displayName: 'Sponsor';
  };
  attributes: {
    imageUrl: Attribute.String;
    title: Attribute.String;
    type: Attribute.Enumeration<['gold', 'silver', 'bronze', 'helper']>;
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
