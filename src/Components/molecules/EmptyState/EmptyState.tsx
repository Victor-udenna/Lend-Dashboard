import ImageAtom from '@/Components/atom/Image';
import Text from '@/Components/atom/Text'
import  './EmptyStateStyle.scss';
import emptyStateImg from  "@/assets/images/emptyState.svg"

type Emptystate = {
  title: string;
  desc: string;
};

const EmptyState = ({ title, desc }: Emptystate) => {
  return (
    <section className="empty__state">
      <Text className="empty__state__header">{title}</Text>
      <ImageAtom alt="empty state image" className="empty__state__img" src={emptyStateImg} />
      <Text className="empty__state__decs">{desc}</Text>
    </section>
  );
};

export default EmptyState;
