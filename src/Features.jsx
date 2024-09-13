import SpinIcon from "./assets/luckyspin-icon.png";
import PollsIcon from "./assets/polls-icon.png";
import ScratchIcon from "./assets/scratch-icon.png";

function Features() {
  return (
    <div className="">
      <div className="text-center text-2xl mt-12 mb-12 font-bold">Features</div>
      <div className="grid md:grid-cols-3 ">
        <div className="border-2 text-center m-2 bg-white rounded-xl p-4 hover:cursor-pointer">
          <div className="flex justify-center">
            <img className="w-32 h-32 " src={PollsIcon} />
          </div>
          <div className="m-12 text-xl">Pols</div>
          Create engaging polls to understand your audience better. Polls are an
          excellent way to gather feedback and insights, helping you tailor your
          offerings to meet the needs and preferences of your customers.
        </div>
        <div className="border-2 text-center m-2 bg-white rounded-xl p-4 hover:cursor-pointer">
          <div className="flex justify-center">
            <img className="w-32 h-32" src={SpinIcon} />
          </div>
          <div className="m-12 text-xl">Lucky Spin</div>
          Increase engagement with a fun and rewarding lucky spin feature. This
          interactive tool keeps your audience excited and coming back for more,
          as they spin for a chance to win exclusive prizes.
        </div>
        <div className="border-2 text-center m-2 bg-white rounded-xl p-4 hover:cursor-pointer">
          <div className="flex justify-center">
            <img className="w-32 h-32" src={ScratchIcon} />
          </div>
          <div className="m-12 text-xl">Scratch</div>
          Let your customers uncover digital surprises with a simple swipe or
          click. Our scratch-off feature turns every interaction into a moment
          of excitement, keeping users engaged and eager to come back for more.
        </div>
      </div>
    </div>
  );
}

export default Features;
