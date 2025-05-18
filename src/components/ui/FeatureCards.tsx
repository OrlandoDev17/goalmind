import Paragraph from './Paragraph';
import { FEATURES_INFO } from '@/consts/FeaturesInfo';

export default function FeatureCards() {
  return (
    <>
      <div className="grid grid-cols-1 2xl:grid-cols-3 justify-center items-center gap-4">
        {FEATURES_INFO.map(({ id, icon: Icon, title, description }) => (
          <article
            className="flex justify-center items-center bg-white p-8 max-w-256 2xl:w-110 min-h-56 rounded-lg shadow-lg border-1 border-gray-200 mx-8"
            key={id}
          >
            <div className="flex flex-col gap-4">
              <Icon className="size-12 text-blue-500" />
              <h3 className="text-2xl font-bold">{title}</h3>
              <Paragraph className="2xl:w-100 text-lg text-start">
                {description}
              </Paragraph>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
