'use client'
import Image from "next/image";
import { useState, useRef } from "react";

import Text from "@/components/Text";
import Logo from "@/components/logo";
import Sort from "@/components/Sort";
import TextField from "@/components/Input/TextField";
import SelectBox from "@/components/Input/SelectBox";
import TextArea from "@/components/Input/TextArea";
import Code from "@/components/Input/Code";
import { CodeProps } from "@/types";

export default function Home() {
  const [code, setCode] = useState<CodeProps>({ lang: "javascript", value: { beforecode: "", aftercode: "" } });
  return (
    <div className="flex flex-col ml-2">
      <SelectBox
        nowlang={code.lang}
        onChange={((value: string) => setCode({ ...code, lang: value }))}
      />
      <Code
        language={code.lang}
        beforecode={code.value.beforecode}
        onChange={(value: string) => setCode({ ...code, value: { ...code.value, beforecode: value } })}
      />
    </div>
  );
}
