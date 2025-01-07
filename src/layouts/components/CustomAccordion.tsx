import { markdownify } from "@/lib/utils/textConverter";
import React, { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const CustomAccordion = ({ faqs }: { faqs: any }) => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  return (
    <section className="section pt-0">
      <div className="container">
        <div className="mb-10">
          <h2
            className="text-center pb-4"
            data-aos="fade-up-sm"
            data-aos-delay="100"
            dangerouslySetInnerHTML={{ __html: markdownify(faqs.title) }}
          />
        </div>

        <div className="row justify-center mb-14">
          <div className="col-12 bg-theme-light rounded-lg p-14">
            {faqs.faqs.map((f: any, i: number) => (
              <AccordionItem
                key={i}
                isActive={activeTab === i}
                question={f.question}
                answer={f.answer}
                onClick={() => {
                  activeTab === i ? setActiveTab(null) : setActiveTab(i);
                }}
                isLast={i === faqs.faqs.length - 1}
              />
            ))}
          </div>
        </div>

        <div className="px-6 py-2 border border-dark rounded-full w-fit mx-auto">
          <p className="text-center text-lg">
            Nu gasesti raspunsul? Te Putem ajuta.
            <span className="ml-2">
              <a href="/contact" className="text-secondary">
                Apasa aici
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({
  isActive,
  question,
  answer,
  onClick,
  isLast,
}: {
  isActive: any;
  question: any;
  answer: any;
  onClick: any;
  isLast: any;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`accordion ${isActive ? "active" : ""}`}>
      <button className="accordion-header" onClick={onClick}>
        <span className="text-left">{question}</span>
        <div
          className={`${
            isActive ? "bg-secondary text-light" : "bg-body text-dark"
          } rounded-full text-sm p-2 transition-colors duration-300`}
        >
          {isActive ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <div
        ref={contentRef}
        className="accordion-content transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isActive ? 1 : 0,
          visibility: isActive ? "visible" : "hidden",
        }}
      >
        <p dangerouslySetInnerHTML={{ __html: answer }} />
      </div>
      {!isLast && <hr className="my-8" />}
    </div>
  );
};

export default CustomAccordion;
