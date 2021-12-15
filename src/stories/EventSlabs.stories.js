import EventSlab from '../components/EditorialSlabs/EventSlabs';

export default {
  title: 'EventSlab',
  component: EventSlab,
};

const Template = (args) => <EventSlab {...args} />;

export const Empty = Template.bind({});
Empty.args = {};
