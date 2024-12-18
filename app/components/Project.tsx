import Image from "next/image";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


const items = [
  {
    id: 1,
    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "New Designed Casual Shoes Bulk Shoes Men Sneakers",
    image:
      "https://lirp.cdn-website.com/e0eb443f/dms3rep/multi/opt/1B3FED96-CBF5-4D18-949C-E67D1F2ED586-396w.jpg",
  },
  {
    id: 2,

    description: "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
    headline: "w3js.com - web front-end studio",
    image:
      "https://i.pinimg.com/736x/fe/7a/fb/fe7afbb91357a08d0480294f65000e0d.jpg",
  },
  {
    id: 3,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://lirp.cdn-website.com/e0eb443f/dms3rep/multi/opt/1B3FED96-CBF5-4D18-949C-E67D1F2ED586-396w.jpg",
  },
  {
    id: 4,

    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://i0.wp.com/getallproclean.com/wp-content/uploads/2021/05/image.jpeg?resize=640%2C640&ssl=1",
  },

  {
    id: 5,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.squarespace-cdn.com/content/v1/659dcbb6b43b2d4b70278919/552bbdfc-9eaf-41dd-a79b-4cff96dc9ac9/Before%2BAnd%2BAfter%2BMove%2BOut%2BCleaning.png",
  },
  {
    id: 6,

    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://www.boredpanda.com/blog/wp-content/uploads/2021/11/before-after-cleaning-pics-48-619751a4aedc1__700.jpg",
  },
];

function Project() {
  return (
      <div className="container mx-auto">
    
        <Carousel
          // additionalTransform={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="long-slider"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 6,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >

          {items.map((item, index) => (
            <div key={item.id} >
                <div>
                  <Image src={item.image} alt="img" height={300} width={400} />
                  {/* <div>
                    {item.headline.substring(0, 15)}...
                  </div> */}
                </div>
            </div>
          ))}
        </Carousel>
      </div>
  );
}

export default Project;