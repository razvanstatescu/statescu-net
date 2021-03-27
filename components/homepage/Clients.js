export const Clients = () => {
  return (
    <section>
      <h2 className="font-raleway font-black text-2xl uppercase mt-16 mb-6">🏢 What Clients Say</h2>
      <div className="mb-6">
        <p className="">
          <span className="italic font-bold text-4xl leading-none text-orange">" </span>
          Razvan is a very valuable asset to my project. He started to deliver very fast on new technologies and he’s
          always looking to learn more. He is the kind of person always focused to deliver. He is looking for solutions,
          making the necessary research and always finding a way to deliver no matter how challenging. You can clearly
          see that he likes what he does as he always shows a natural enthusiasm.
        </p>

        <p className="flex mt-4 justify-end items-center">
          <span className="italic font-bold text-sm">Dragos Rautu @</span>
          <a href="https://modex.tech" target="_blank">
            <img src="/clients/modex.png" alt="Modex" className="h-6 ml-2 w-auto" />
          </a>
        </p>
      </div>
      <div className="md:flex">
        <div className="flex-1 md:pr-4 mb-6 md:mb-0">
          <p className="">
            <span className="italic font-bold text-4xl leading-none text-orange">" </span>We worked with Razvan on a few
            projects already and we are happy with our collaboration. He was really responsive and prompt and found
            solutions even for more complex situations.
          </p>

          <p className="flex mt-4 justify-end items-center">
            <span className="italic font-bold text-sm">Andrei Stoica @</span>
            <a href="https://stoica.co" target="_blank">
              <img src="/clients/stoica.png" alt="stoica.co" className="h-4 ml-2 w-auto" />
            </a>
          </p>
        </div>
        <div className="flex-1 md:pl-4">
          <p className="">
            <span className="italic font-bold text-4xl leading-none text-orange">" </span>We have established a long
            term collaboration with Razvan and we have been very happy with his work. The communication was great and
            Razvan is an excellent programmer willing to go the extra mile to contribute to the success of any project.
          </p>

          <p className="flex mt-4 justify-end items-center">
            <span className="italic font-bold text-sm">Octavian Văcărescu @</span>
            <a href="https://octagram.ro" target="_blank">
              <img src="/clients/octagram.png" alt="octagram" className="h-6 ml-2 w-auto" />
            </a>
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <a target="_blank" href="https://www.goodfirms.co/company/statescu-net">
          <img
            style={{ width: "150px" }}
            src="https://assets.goodfirms.co/badges/color-badge/top-software-development-companies.svg"
            alt="GoodFirms Badge"
          />
        </a>
      </div>
    </section>
  );
};
