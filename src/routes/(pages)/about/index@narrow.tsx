import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { TimelineItem } from "~/components/TimelineItem";
import { Icon } from "~/components/Icon";

export default component$(() => {
  return (
    <div class="container flex flex-col items-center mx-auto px-2 py-10 lg:max-w-5xl lg:mt-0 lg:flex-row lg:items-center xl:max-w-6xl">
      <div class="max-w-xl">
        <img
          src="/images/me.jpg"
          // src="https://content.bope.cc/content/Web/bope_profile.JPG"
          class="block w-full rounded-md"
          alt="Ryan Brooks"
        />
      </div>
      <div class="bg-slate-50 p-4 pl-10 rounded-md lg:-ml-16 lg:mt-[33%] dark:bg-neutral-800 dark:text-slate-50">
        <div class="max-w-lg pt-6">
          <h1 class="text-4xl font-semibold mb-5">Hello There!</h1>
          <h2 class="text-4xl font-semibold mb-5 lg:mb-24">
            My name is Ryan. I am a full-time{" "}
            <span class="text-coral">virgin</span> and part-time{" "}
            <span class="text-coral">Identity & Access Admin</span>.
          </h2>
        </div>
        <TimelineItem date={{ start: "Dec 2022", end: "Now" }} title="IAM Product Manager / SME" company="Department of Education (Corporate)">
          <p>
            When I got this role I shifted from half queue work, half product management/development into a full time internal Subject Matter Expert (SME) role.
            I'm now an SME for a bespoke DoE application 😅.
          </p>
        </TimelineItem>
        <TimelineItem date={{ start: "Oct 2021", end: "Dec 2022" }} title="IAM Operational Support" company="Department of Education (Corporate)">
          <p>
            "School land" got boring, so I moved up and into a Corporate role with the Department of Education. 
            In this role I was effectivly one of the Queue monkeys for the Identity and Access Management team, looking after around 700,000 identities.
            This role taught me alot about how the government "works", and all the policy/tape that is in the way of doing work.
            Here I learnt about various Identity Products.
            Towards the end of this role I had moved away from queue monkey and onto product development and testing.
          </p>
        </TimelineItem>
        <TimelineItem date={{ start: "Feb 2019", end: "Oct 2021" }} title="Onsite Technical Officer" company="Department of Education (School)">
          <p>
            This is where I got my "Start" in IT. I was employed as "Tech Support", but as usual with government it flourished into so much more... 
            By the end I was a: Camera Man, Producer, Gardener and Caterrer.
            Oh yeah and ontop of all of that I did IT.
          </p>
          
        </TimelineItem>
        <TimelineItem date={{ start: "Nov 2017", end: "Sep 2020" }} title="Team Member" company="Coles Supermarkets">
          <p>
            Stuff occured around foods. From Cold food to more room temperature food. If they sell it, I touched it.
          </p>
        </TimelineItem>

        <a target="_blank" href="https://www.linkedin.com/in/bope/"><Icon name="Linkedin" size="64" class="stroke-black fill-none dark:stroke-white hover:bg-linkedin rounded-md"/></a>        

      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "About Ryan Brooks",
    },
  ],
};
