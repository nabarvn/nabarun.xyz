const Intro = () => {
  return (
    <div className='flex flex-col mx-auto md:max-w-lg lg:max-w-sm xl:max-w-lg order-2 lg:order-1 mt-9 lg:mt-0'>
      <h1 className='text-2xl md:text-4xl xl:text-5xl font-bold text-center text-purple-700 dark:text-yellow-300'>
        An engineer who loves to code, travel, and meet BUIDLers across the
        globe.
      </h1>
      <div className='text-night-gray dark:text-gray-300 text-base md:text-lg font-semibold text-center mt-9'>
        <p className='lg:hidden'>
          Howdy! My name is Nabarun (call me Nick if you&apos;d like), and
          I&apos;m a Software Developer currently based in India. I love being
          an autodidact as it enables my curious mind to thrive. I&apos;m Dev
          #369 at Developer DAO and a member of DAOpunks.
        </p>
        <p className='hidden lg:contents'>
          Howdy! My name is Nabarun (call me Nick if you&apos;d like), and
          I&apos;m a Software Developer currently based in India. I love being
          an autodidact as it enables my curious mind to thrive. I&apos;m Dev
          #369 at Developer DAO and a member of DAOpunks.
        </p>
      </div>
    </div>
  );
};

export default Intro;
