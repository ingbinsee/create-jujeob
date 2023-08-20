import Heading from '@/components/Heading';

let title = '주접쟁이 사자 🦁';

function Header() {
  return (
    <Heading
      title={title}
      className="text-[64px] text-center font-semibold text-sky-700"
    />
  );
}

export default Header;
