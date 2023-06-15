const Random = () => {
  return (
    <div className='text-night-gray dark:text-gray-300 text-base md:text-lg font-semibold justify-center cursor-default md:text-justify md:max-w-5xl lg:max-w-4xl xl:max-w-5xl md:px-4 lg:px-5 xl:px-9 pb-0 mt-14 md:mt-11'>
      <div className='lg:flex group'>
        <h3 className='text-orange-500 dark:text-orange-300 text-xl md:text-2xl xl:text-3xl'>
          /random
        </h3>
        <span className='self-center lg:opacity-0 group-hover:opacity-100 transition duration-300 text-orange-500 dark:text-orange-300 text-sm lg:text-base mt-1 lg:mt-0 xl:mt-1 lg:ml-5'>
          (some fun facts and some not so much)
        </span>
      </div>
      <ul
        className='mt-5 ml-5'
        style={{
          listStyleType: "square",
        }}
      >
        <li>
          I can speak five languages; 4 with professional proficiency and 1 as a
          beginner.
        </li>
        <li className='mt-2'>
          I was recognized among the Top 10 School Toppers who brought laurels
          by securing a score of more than 90% in the CBSE India Senior School
          Certificate Examination.
        </li>
        <li className='mt-2'>
          I won a Badminton Championship in 2013 which was held for college
          freshmen.
        </li>
        <li className='mt-2'>
          I can play the &quot;Nothing Else Matters&quot; intro by plucking the
          strings on my acoustic guitar.
        </li>
        <li className='mt-2'>
          I received a Certificate of Appreciation from my first employer for
          maintaining excellent professional practices.
        </li>
      </ul>
    </div>
  );
};

export default Random;
