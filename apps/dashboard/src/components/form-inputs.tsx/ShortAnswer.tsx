import React from "react";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

function ShortAnswer({ value, setValue }: Props) {
  return (
    <div className="flex flex-col space-y-2">
      <p className="text-sm text-zinc-500">
        Question: {value ? `${value}?` : "Type question below"}
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Question"
        className="bg-zinc-100 border w-full border-zinc-200/50 py-2 px-4 rounded-xl flex-1"
      />
    </div>
  );
}

export default ShortAnswer;
// interface ComponentProps<T> {
//   name: string
//   data: T
// }

// type ShortAnswerProps = {
//   value: string
//   setValue: () => void
// }

// export default ShortAnswer;
// const imp = (component: "ShortAnswer" | "Paragraph", props: ComponentProps<ShortAnswerProps>) => {
//   const comp = await import(component)

//   return comp(props)
// }
