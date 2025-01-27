import { component$, Slot } from "@builder.io/qwik";

type ItemProps = {
  date: { start: string; end: string };
  title: string;
  company: string;
};

export const TimelineItem = component$<ItemProps>(({ date, title, company }) => (
  <div class="relative border-l-2 border-dotted border-coral p-5">
    <span class="absolute rounded-full h-4 w-4 -left-[9px] top-6 bg-coral"></span>
    <p>{date.start} - {date.end}</p>
    <h3 class="text-3xl">{title}</h3>
    <h4 class="text-sm italic">{company}</h4>
    <div class="pt-3">
      <Slot />
    </div>
  </div>
));