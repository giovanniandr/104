import React from 'react'

function Login() {
  return (
    <section class="flex flex-col md:flex-row h-screen items-center">
      <div className="lg:flex items-center justify-center place-items-center hidden md:w-1/2 xl:w-2/3 h-screen bg-[#363C3C]">
          <svg
            width="320"
            height="96"
            viewBox="0 0 160 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.635653 18V0.545454H7.18111C8.52202 0.545454 9.64702 0.778409 10.5561 1.24432C11.4709 1.71023 12.1612 2.36364 12.6271 3.20454C13.0987 4.03977 13.3345 5.0142 13.3345 6.12784C13.3345 7.24716 13.0959 8.21875 12.6186 9.04261C12.147 9.8608 11.451 10.4943 10.5305 10.9432C9.61009 11.3864 8.4794 11.608 7.13849 11.608H2.47656V8.98295H6.71236C7.49645 8.98295 8.13849 8.875 8.63849 8.65909C9.13849 8.4375 9.50781 8.11648 9.74645 7.69602C9.99077 7.26989 10.1129 6.74716 10.1129 6.12784C10.1129 5.50852 9.99077 4.98011 9.74645 4.54261C9.50213 4.09943 9.12997 3.7642 8.62997 3.53693C8.12997 3.30398 7.48509 3.1875 6.69531 3.1875H3.79759V18H0.635653ZM9.6527 10.0909L13.9737 18H10.4453L6.20099 10.0909H9.6527ZM16.245 18V0.545454H27.5973V3.19602H19.407V7.93466H27.0092V10.5852H19.407V15.3494H27.6655V18H16.245ZM40.3089 5.34375C40.2294 4.59943 39.8942 4.01989 39.3033 3.60511C38.718 3.19034 37.9567 2.98295 37.0192 2.98295C36.3601 2.98295 35.7947 3.08239 35.3232 3.28125C34.8516 3.48011 34.4908 3.75 34.2408 4.09091C33.9908 4.43182 33.8629 4.82102 33.8572 5.25852C33.8572 5.62216 33.9396 5.9375 34.1044 6.20455C34.2749 6.47159 34.505 6.69886 34.7947 6.88636C35.0845 7.06818 35.4055 7.22159 35.7578 7.34659C36.1101 7.47159 36.4652 7.5767 36.8232 7.66193L38.4595 8.07102C39.1186 8.22443 39.7521 8.43182 40.3601 8.69318C40.9737 8.95455 41.522 9.28409 42.005 9.68182C42.4936 10.0795 42.88 10.5597 43.1641 11.1222C43.4482 11.6847 43.5902 12.3437 43.5902 13.0994C43.5902 14.1222 43.3288 15.0227 42.8061 15.8011C42.2834 16.5739 41.5277 17.179 40.5391 17.6165C39.5561 18.0483 38.3658 18.2642 36.968 18.2642C35.6101 18.2642 34.4311 18.054 33.4311 17.6335C32.4368 17.2131 31.6584 16.5994 31.0959 15.7926C30.5391 14.9858 30.2379 14.0028 30.1925 12.8438H33.3033C33.3487 13.4517 33.5362 13.9574 33.8658 14.3608C34.1953 14.7642 34.6243 15.0653 35.1527 15.2642C35.6868 15.4631 36.2834 15.5625 36.9425 15.5625C37.63 15.5625 38.2322 15.4602 38.7493 15.2557C39.272 15.0455 39.6811 14.7557 39.9766 14.3864C40.272 14.0114 40.4226 13.5739 40.4283 13.0739C40.4226 12.6193 40.2891 12.2443 40.0277 11.9489C39.7663 11.6477 39.3999 11.3977 38.9283 11.1989C38.4624 10.9943 37.9169 10.8125 37.2919 10.6534L35.3061 10.142C33.8686 9.77273 32.7322 9.21307 31.897 8.46307C31.0675 7.70739 30.6527 6.70455 30.6527 5.45454C30.6527 4.42614 30.9311 3.52557 31.4879 2.75284C32.0504 1.98011 32.8146 1.38068 33.7805 0.954545C34.7464 0.522727 35.8402 0.306818 37.0618 0.306818C38.3004 0.306818 39.3857 0.522727 40.3175 0.954545C41.255 1.38068 41.9908 1.97443 42.5249 2.73579C43.0589 3.49148 43.3345 4.3608 43.3516 5.34375H40.3089ZM45.642 3.19602V0.545454H59.5682V3.19602H54.1733V18H51.0369V3.19602H45.642ZM62.3849 18H59.0099L65.1548 0.545454H69.0582L75.2116 18H71.8366L67.1747 4.125H67.0384L62.3849 18ZM62.4957 11.1562H71.7003V13.696H62.4957V11.1562ZM88.5135 0.545454H91.6754V11.9489C91.6754 13.1989 91.38 14.2983 90.7891 15.2472C90.2038 16.196 89.38 16.9375 88.3175 17.4716C87.255 18 86.0135 18.2642 84.593 18.2642C83.1669 18.2642 81.9226 18 80.8601 17.4716C79.7976 16.9375 78.9737 16.196 78.3885 15.2472C77.8033 14.2983 77.5107 13.1989 77.5107 11.9489V0.545454H80.6726V11.6847C80.6726 12.4119 80.8317 13.0597 81.1499 13.6278C81.4737 14.196 81.9283 14.642 82.5135 14.9659C83.0987 15.2841 83.7919 15.4432 84.593 15.4432C85.3942 15.4432 86.0874 15.2841 86.6726 14.9659C87.2635 14.642 87.718 14.196 88.0362 13.6278C88.3544 13.0597 88.5135 12.4119 88.5135 11.6847V0.545454ZM95.1122 18V0.545454H101.658C102.999 0.545454 104.124 0.778409 105.033 1.24432C105.947 1.71023 106.638 2.36364 107.104 3.20454C107.575 4.03977 107.811 5.0142 107.811 6.12784C107.811 7.24716 107.572 8.21875 107.095 9.04261C106.624 9.8608 105.928 10.4943 105.007 10.9432C104.087 11.3864 102.956 11.608 101.615 11.608H96.9531V8.98295H101.189C101.973 8.98295 102.615 8.875 103.115 8.65909C103.615 8.4375 103.984 8.11648 104.223 7.69602C104.467 7.26989 104.589 6.74716 104.589 6.12784C104.589 5.50852 104.467 4.98011 104.223 4.54261C103.979 4.09943 103.607 3.7642 103.107 3.53693C102.607 3.30398 101.962 3.1875 101.172 3.1875H98.2741V18H95.1122ZM104.129 10.0909L108.45 18H104.922L100.678 10.0909H104.129ZM112.963 18H109.588L115.733 0.545454H119.636L125.79 18H122.415L117.753 4.125H117.616L112.963 18ZM113.074 11.1562H122.278V13.696H113.074V11.1562ZM142.433 0.545454V18H139.62L131.396 6.1108H131.251V18H128.089V0.545454H130.918L139.134 12.4432H139.288V0.545454H142.433ZM145.111 3.19602V0.545454H159.037V3.19602H153.642V18H150.506V3.19602H145.111Z"
              fill="url(#paint0_radial_87_166)"
            />
            <path
              d="M125.127 29.5455V47H121.965V32.6222H121.863L117.781 35.2301V32.3324L122.119 29.5455H125.127ZM136.011 47.3324C134.607 47.3324 133.403 46.9773 132.397 46.267C131.397 45.5511 130.627 44.5199 130.087 43.1733C129.553 41.821 129.286 40.1932 129.286 38.2898C129.292 36.3864 129.562 34.767 130.096 33.4318C130.636 32.0909 131.406 31.0682 132.406 30.3636C133.411 29.6591 134.613 29.3068 136.011 29.3068C137.408 29.3068 138.61 29.6591 139.616 30.3636C140.621 31.0682 141.391 32.0909 141.925 33.4318C142.465 34.7727 142.735 36.392 142.735 38.2898C142.735 40.1989 142.465 41.8295 141.925 43.1818C141.391 44.5284 140.621 45.5568 139.616 46.267C138.616 46.9773 137.414 47.3324 136.011 47.3324ZM136.011 44.6648C137.102 44.6648 137.962 44.1278 138.593 43.054C139.229 41.9744 139.548 40.3864 139.548 38.2898C139.548 36.9034 139.403 35.7386 139.113 34.7955C138.823 33.8523 138.414 33.142 137.886 32.6648C137.357 32.1818 136.732 31.9403 136.011 31.9403C134.925 31.9403 134.067 32.4801 133.437 33.5597C132.806 34.6335 132.488 36.2102 132.482 38.2898C132.477 39.6818 132.616 40.8523 132.9 41.8011C133.19 42.75 133.599 43.4659 134.127 43.9489C134.656 44.4261 135.283 44.6648 136.011 44.6648ZM145.251 43.7614V41.2472L152.658 29.5455H154.754V33.125H153.476L148.49 41.0256V41.1619H158.828V43.7614H145.251ZM153.578 47V42.9943L153.612 41.8693V29.5455H156.595V47H153.578Z"
              fill="#B4984C"
            />
            <path
              d="M-1.08594 22.7727H159.991V24.4091H-1.08594V22.7727Z"
              fill="url(#paint1_radial_87_166)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_87_166"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-11.5 53) scale(90.5 252.776)"
              >
                <stop stop-color="#A9A184" />
                <stop offset="0.5" stop-color="#A48F43" />
                <stop offset="1" stop-color="#B4984C" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_87_166"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(-11.5 53) scale(90.5 252.776)"
              >
                <stop stop-color="#A9A184" />
                <stop offset="0.5" stop-color="#A48F43" />
                <stop offset="1" stop-color="#B4984C" />
              </radialGradient>
            </defs>
          </svg>
      </div>
      <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center bg-[#FDFCFA]">
        <div className="w-full h-100">
          <h1 className="mt-12 text-xl font-medium leading-tight md:text-2xl"> Welcome to Restaurant Manangement </h1>
          <form class="mt-6" action="#" method="POST">
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input type="email" name="" id="" placeholder="Enter email address" className="w-full px-4 py-3 rounded-lg  mt-2 border bg-[#F5F5F5] focus:bg-[#FFFFFF] border-none focus:outline-none" autofocus autocomplete required/>
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" name="" id="" placeholder="Enter password" minlength="6" className="w-full px-4 py-3 rounded-lg  mt-2 border bg-[#F5F5F5] focus:bg-[#FFFFFF] border-none focus:outline-none" required/>
        </div>

        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-[#363C3C] hover:opacity-90 focus:opacity-80">Forgot the password ?</a>
        </div>

        <button type="submit" className="w-full block bg-[#363C3C] hover:opacity-90 focus:opacity-80 text-white font-medium rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>
        </div>
      </div>
    </section>
  );
}

export default Login