export default function work(){
    return(
        <div className="w-full flex flex-col items-center justify-center mt-10">
            <div className="heading text-5xl text-center font-bold">
                <h1 className="mb-2">Discover <span className="text-purple-600">Portfolio</span> websites</h1>
                <h1>built by the Avanic community</h1>
            </div>
            <div className="search flex flex-row items-center justify-start border border-gray-300 rounded-md px-4 py-2 mt-6 w-full max-w-lg shadow-sm">
                <div className="logo-svg text-gray-500">
                    <svg data-wf-icon="SearchDefaultIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.56338 4C5.59538 4 4 5.59538 4 7.56338C4 9.53138 5.59538 11.1268 7.56338 11.1268C9.53138 11.1268 11.1268 9.53138 11.1268 7.56338C11.1268 5.59538 9.53138 4 7.56338 4ZM3 7.56338C3 5.04309 5.04309 3 7.56338 3C10.0837 3 12.1268 5.04309 12.1268 7.56338C12.1268 8.64339 11.7516 9.63578 11.1244 10.4173L13.8536 13.1464L13.1464 13.8536L10.4173 11.1244C9.63578 11.7516 8.64339 12.1268 7.56338 12.1268C5.04309 12.1268 3 10.0837 3 7.56338Z" fill="currentColor"></path></svg>
                </div>
                <div className="searchinput">
                    <input placeholder="Search" className="input ml-3 w-full focus:outline-none text-gray-800 placeholder-gray-400 bg-transparent"/>
                </div>
            </div>
            <div className="sections-withbtn mt-6 flex flex-col md:flex-row items-center justify-between w-full pr-21 pl-21">
                <div className="flex gap-4">
                  <button  className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                    profile
                  </button>
                  <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                      ecommerce
                  </button>
                  <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                      business
                  </button>
                  <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                      saas
                  </button>
                </div>
                <div className="addBtn ml-4">
                  <button className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                    Add
                  </button>
                </div>
            </div> 
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-6 mr-20 ml-20">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
                    <video src="/video.mp4" controls className="w-full h-auto object-cover rounded-md"></video>
                    <div className="text-btns flex flex-row justify-between items-center m-2">
                      <div className="text">
                        <h3 className="text-lg font-semibold text-gray-800 m-2">Hello</h3>
                        <p className="description text-gray-500 text-sm m-2">description</p>
                      </div>
                      <div className="buttons flex gap-2">
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Edit
                        </button>
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
                    <video src="/video.mp4" controls className="w-full h-auto object-cover rounded-md"></video>
                    <div className="text-btns flex flex-row justify-between items-center m-2">
                      <div className="text">
                        <h3 className="text-lg font-semibold text-gray-800 m-2">Hello</h3>
                        <p className="description text-gray-500 text-sm m-2">description</p>
                      </div>
                      <div className="buttons flex gap-2">
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Edit
                        </button>
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
                    <video src="/video.mp4" controls className="w-full h-auto object-cover rounded-md"></video>
                    <div className="text-btns flex flex-row justify-between items-center m-2">
                      <div className="text">
                        <h3 className="text-lg font-semibold text-gray-800 m-2">Hello</h3>
                        <p className="description text-gray-500 text-sm m-2">description</p>
                      </div>
                      <div className="buttons flex gap-2">
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Edit
                        </button>
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
                    <video src="/video.mp4" controls className="w-full h-auto object-cover rounded-md"></video>
                    <div className="text-btns flex flex-row justify-between items-center m-2">
                      <div className="text">
                        <h3 className="text-lg font-semibold text-gray-800 m-2">Hello</h3>
                        <p className="description text-gray-500 text-sm m-2">description</p>
                      </div>
                      <div className="buttons flex gap-2">
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Edit
                        </button>
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
                    <video src="/video.mp4" controls className="w-full h-auto object-cover rounded-md"></video>
                    <div className="text-btns flex flex-row justify-between items-center m-2">
                      <div className="text">
                        <h3 className="text-lg font-semibold text-gray-800 m-2">Hello</h3>
                        <p className="description text-gray-500 text-sm m-2">description</p>
                      </div>
                      <div className="buttons flex gap-2">
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Edit
                        </button>
                        <button className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer">
                          Delete
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}