import { markdownify } from "@/lib/utils/textConverter";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
import Counter from "../functional-component/Counter";

const Plans = ({ plans }: { plans: any }) => {
  const [checked, setCheck] = useState(false);
  const [start, setStart] = useState<number | undefined>();
  const [end, setEnd] = useState<number | undefined>();

  useEffect(() => {
    plans.packs.forEach((p: any) => {
      setStart(!checked ? p?.price?.monthly_price : p?.price?.yearly_price);
      setEnd(checked ? p?.price?.yearly_price : p?.price?.monthly_price);
    });
  }, [checked, plans.packs]);

  return (
    <section className="section pt-0">
      <div className="container">
        <div
          className="flex items-center justify-center mb-10"
          data-aos="fade-up-sm"
        >
          <label className="text-2xl font-medium" id="monthly">
            Billed Monthly
          </label>

          <label className="relative inline-flex items-center cursor-pointer mx-3 group">
            <input
              onChange={(e) => setCheck(e.target.checked)}
              type="checkbox"
              className="sr-only peer"
              checked={checked}
            />
            <div className="w-[70px] h-[34px] border-secondary bg-secondary border rounded-full peer peer-checked:after:left-[95%] peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1 after:bg-light after:rounded-full after:h-[24px] after:w-[24px] after:transition-all scale-100 peer-checked:active:after:scale-75 peer-active:after:scale-75"></div>
          </label>

          <label className="h5 m-0" id="annually">
            Billed Annually
          </label>

          <div className="ml-5 px-4 py-1 rounded-full bg-accent hidden md:block">
            <p className="text-lg">25% OFF</p>
          </div>
        </div>
        <div className="row g-4">
          {plans.packs.map((p: any, i: number) => (
            <div
              key={i}
              className="col-12 md:col-6 lg:col-4"
              data-aos="fade-up-sm"
              data-aos-delay={`${i * 100}`}
            >
              <div className="border rounded-lg p-0 h-full">
                <div className="p-7">
                  <h4
                    dangerouslySetInnerHTML={{ __html: markdownify(p.name) }}
                    className="text-xl lg:text-2xl mb-4"
                  />
                  <p
                    className="text-xl mb-20"
                    dangerouslySetInnerHTML={{
                      __html: markdownify(p.description),
                    }}
                  />

                  {p?.price ? (
                    <h2>
                      <Counter
                        count={
                          checked
                            ? p?.price?.yearly_price
                            : p?.price?.monthly_price
                        }
                        prefix={"$"}
                        start={start}
                        end={end}
                        duration={0.8}
                      />
                    </h2>
                  ) : (
                    <h2 className="max-xl:h3">Let's Talk</h2>
                  )}
                  <p
                    className="text-lg text-text/70"
                    dangerouslySetInnerHTML={{
                      __html: markdownify(p.duration),
                    }}
                  />

                  {p.button.enable && (
                    <CustomButton
                      link={p.button.link}
                      label={p.button.label}
                      className="my-10"
                    />
                  )}

                  <p className="text-xl font-semibold mb-1">Recommended for</p>
                  <p
                    className="text-lg text-text/70"
                    dangerouslySetInnerHTML={{
                      __html: markdownify(p.recommended),
                    }}
                  />
                </div>

                <hr className="w-full" />

                <ul className="p-7">
                  <p
                    className="font-semibold text-lg mb-5"
                    dangerouslySetInnerHTML={{
                      __html: markdownify(p.feature.title),
                    }}
                  />
                  {p.feature.points.map((p: any, i: number) => (
                    <li key={i} className="flex items-center mb-4 last:mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgb(255, 130, 92)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <p
                        className="text-text/70 text-xl ml-3"
                        dangerouslySetInnerHTML={{ __html: markdownify(p) }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
