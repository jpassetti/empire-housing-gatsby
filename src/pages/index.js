import * as React from "react"
import Header from "../components/header"


// markup
const IndexPage = () => {
  return (
	  <div class="px-4 sm:px-6 md:px-8 relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto pb-16">
      <title>Empire Housing</title>
		<Header />
		  	<h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">We foster community revitalization in the City of Syracuse and around New York State.</h2>
		  	<p className="text-lg sm:text-2xl font-medium sm:leading-10 mb-6">Empire Housing and Development possesses a proven track record as both a developer and a consultant.</p>
		  	<p className="text-lg sm:text-2xl font-light sm:leading-10 mb-6">This experience is valuable to other not-for-profits, private developers, builders and communities that have critical needs but do not have either the available staff or the expertise necessary to complete a particular project. Depending on the project, Empire is capable of providing consulting services or addressing specific development needs.</p>

		  <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8">Contact us</h3>
		  <p className="md:col-span-6 xl:col-span-7 md:ml-0 mb-8">Due to the Corona virus and the importance of social distancing, Empire Housing will limit face-to face communication with clients until further notice.  Although our office won't be open for visitors, we will continue to conduct business by telephone and email.</p>

		  <p className="mb-4"><strong className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 md:ml-0">Phone:</strong> 315.425.7775</p>

		  <p className="mb-4"><strong className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 md:ml-0">Kimberly Berger:</strong> <a href='mailto:kimberlywithempire@gmail.com'>kimberlywithempire@gmail.com</a></p>
		  <p className="mb-4"><strong className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 md:ml-0">Bill DeMarle:</strong> <a href='mailto:billdemarle@gmail.com'>billdemarle@gmail.com</a></p>
		  <p className="mb-4"><strong className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 md:ml-0">Bob Sekowski:</strong>  <a href='mailto:bsekowski@centralny.twcbc.com'>bsekowski@centralny.twcbc.com</a></p>
    </div>
  )
}

export default IndexPage
