import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

function Industries() {
  return (
    <div className="">
      <div className="m-12">
        <div className="text-center text-2xl font-bold m-4">Industries</div>
        Our application is designed to enhance customer engagement and drive
        sales through personalized and interactive experiences. While its
        capabilities are not limited to specific industries, here are some
        examples of sectors that can benefit from its use:
      </div>
      <div className="flex justify-center ">
        <Carousel
          opts={{
            align: "center",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-1/2 sm:w-full max-w-sm mb-12"
        >
          <CarouselContent>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100 ">
              <span className="text-sm sm:text-xl font-bold ">
                Fashion Retail
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Engage shoppers with interactive style quizzes and instant-win
                games. Boost loyalty by creating personalized shopping
                experiences.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Grocery Retail
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Use gamified promotions to encourage repeat purchases. Engage
                customers with interactive polls to drive sales and loyalty.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Beauty & Personal Care
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Create interactive experiences like virtual try-ons and beauty
                quizzes. Increase engagement with exclusive gamified campaigns.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Electronics Retail
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Enhance shopping with interactive guides and comparison tools.
                Use quizzes to improve product recommendations and boost sales.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Home & Furniture
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Engage customers with room design tools and style quizzes.
                Strengthen loyalty with gamified rewards for surveys and polls.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Pharmacy & Health Retail
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Educate customers with health quizzes and product
                recommendations. Use loyalty programs to encourage repeat
                visits.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Pet Supplies Retail
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Engage pet owners with quizzes and personalized suggestions.
                Offer gamified loyalty programs to encourage repeat purchases.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">Bookstores</span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Enhance engagement with reading quizzes and polls. Reward
                frequent shoppers with gamified promotions.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">Toy Stores</span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Engage families with interactive games and quizzes. Drive sales
                with fun, gamified promotions and rewards.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Home Improvement & DIY
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Help customers find tools with project guides and quizzes. Use
                gamified incentives for DIY challenges.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2 rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Wine & Spirits Retail
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Engage customers with tasting quizzes and polls. Reward loyal
                customers with gamified promotions.
              </p>
            </CarouselItem>
            <CarouselItem className="text-center basis-1/2 p-4 m-4 border-2  rounded-xl bg-gray-100">
              <span className="text-sm sm:text-xl font-bold">
                Online Marketplaces
              </span>
              <br />
              <br />
              <p className="text-sm sm:text-base">
                Enhance shopping with interactive tools and quizzes. Tailor the
                journey with insights on customer preferences.
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Industries;
