import Button from '@/components/Button';
import {data} from '@/data/data';

function CreateJejeob({className, name, spanClassName, ...restProps}) {
  return (
    <div className={`${className} relative`} {...restProps}>
      <output className="result">
        {data[Math.floor(Math.random() * data.length)].replace(
          /''/g,
          `'${name}'`
        )}
      </output>
      <Button type="button" text="복사하기" className={spanClassName} />
    </div>
  );
}
export default CreateJejeob;
