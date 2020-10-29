import RstyLogo from '@/components/logo';

export default {
  title: 'Components / Logo',
  excludeStories: /.*Data$/,
};

export const Default = () => ({
  components: { RstyLogo },
  template: '<rsty-logo />',
});

// TODO - Adding dark background when install TailwindCSS
export const White = () => ({
  components: { RstyLogo },
  template: '<rsty-logo variant="white" />',
});
