import { SvgIcon, SvgIconProps } from "@mui/material";

const CompanyFullLogo = (props: SvgIconProps) => {
	return (
		<SvgIcon width='200' height='20' viewBox='0 0 200 20' {...props}>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M8.59375 18.75V17.1875H6.25C3.66116 17.1875 1.5625 15.0888 1.5625 12.5V6.25C1.5625 3.66116 3.66116 1.5625 6.25 1.5625H8.59375V0H6.25C2.79822 0 0 2.79822 0 6.25V12.5C0 15.9518 2.79822 18.75 6.25 18.75H8.59375ZM12.5 17.1875H10.1562V18.75H12.5C15.9518 18.75 18.75 15.9518 18.75 12.5V6.25C18.75 2.79822 15.9518 0 12.5 0H10.1562V1.5625H12.5C15.0888 1.5625 17.1875 3.66116 17.1875 6.25V12.5C17.1875 15.0888 15.0888 17.1875 12.5 17.1875ZM34.4826 16.0625C35.1596 16.3542 35.9204 16.5 36.7651 16.5C37.5973 16.5 38.355 16.3542 39.0382 16.0625C39.7213 15.7708 40.302 15.3426 40.7803 14.7779C41.2585 14.2132 41.628 13.512 41.8889 12.6742C42.1497 11.8364 42.2801 10.8715 42.2801 9.77926C42.2801 8.68705 42.1497 7.72518 41.8889 6.89362C41.628 6.06205 41.2585 5.36082 40.7803 4.78989C40.302 4.21897 39.7213 3.78768 39.0382 3.49601C38.355 3.20434 37.5973 3.05851 36.7651 3.05851C35.9204 3.05851 35.1596 3.20434 34.4826 3.49601C33.8057 3.78768 33.2281 4.21897 32.7499 4.78989C32.2717 5.36082 31.9021 6.06205 31.6413 6.89362C31.3804 7.72518 31.25 8.68705 31.25 9.77926C31.25 10.8715 31.3804 11.8364 31.6413 12.6742C31.9021 13.512 32.2717 14.2132 32.7499 14.7779C33.2281 15.3426 33.8057 15.7708 34.4826 16.0625ZM38.3115 14.8059C37.8395 15.0044 37.324 15.1037 36.7651 15.1037C36.2061 15.1037 35.6906 15.0044 35.2186 14.8059C34.7466 14.6073 34.3398 14.3218 33.9982 13.9495C33.6566 13.5771 33.3927 13.1303 33.2064 12.609C33.02 12.0878 32.9269 11.5044 32.9269 10.859V8.69947C32.9269 8.05407 33.02 7.47075 33.2064 6.94947C33.3927 6.42819 33.6566 5.98138 33.9982 5.60904C34.3398 5.2367 34.7466 4.95124 35.2186 4.75266C35.6906 4.55408 36.2061 4.45479 36.7651 4.45479C37.324 4.45479 37.8395 4.55408 38.3115 4.75266C38.7835 4.95124 39.1903 5.2367 39.5319 5.60904C39.8735 5.98138 40.1375 6.42819 40.3238 6.94947C40.5101 7.47075 40.6033 8.05407 40.6033 8.69947V10.859C40.6033 11.5044 40.5101 12.0878 40.3238 12.609C40.1375 13.1303 39.8735 13.5771 39.5319 13.9495C39.1903 14.3218 38.7835 14.6073 38.3115 14.8059ZM46.4351 6.67021H44.9445V20H46.4351V14.7128H46.5096C47.081 15.9043 48.0188 16.5 49.323 16.5C49.9193 16.5 50.4596 16.3821 50.944 16.1463C51.4284 15.9105 51.8414 15.5754 52.183 15.141C52.5246 14.7066 52.7855 14.1791 52.9656 13.5585C53.1457 12.9379 53.2357 12.2429 53.2357 11.4734C53.2357 10.7039 53.1457 10.0089 52.9656 9.3883C52.7855 8.76773 52.5246 8.24025 52.183 7.80585C51.8414 7.37145 51.4284 7.03635 50.944 6.80053C50.4596 6.56472 49.9193 6.44681 49.323 6.44681C48.6523 6.44681 48.0778 6.59264 47.5996 6.88431C47.1213 7.17598 46.758 7.62588 46.5096 8.23404H46.4351V6.67021ZM50.9067 14.3684C50.4223 14.8958 49.7578 15.1596 48.9131 15.1596C48.5777 15.1596 48.2579 15.1161 47.9536 15.0293C47.6492 14.9424 47.3853 14.8152 47.1617 14.6476C46.9381 14.4801 46.7611 14.2753 46.6307 14.0332C46.5003 13.7912 46.4351 13.5151 46.4351 13.2048V9.63032C46.4351 9.36968 46.5003 9.12456 46.6307 8.89495C46.7611 8.66534 46.9381 8.46986 47.1617 8.30851C47.3853 8.14716 47.6492 8.01995 47.9536 7.92686C48.2579 7.83378 48.5777 7.78723 48.9131 7.78723C49.7578 7.78723 50.4223 8.05097 50.9067 8.57846C51.3912 9.10594 51.6334 9.79787 51.6334 10.6543V12.2926C51.6334 13.1489 51.3912 13.8409 50.9067 14.3684ZM56.692 15.8391C56.959 16.1308 57.3534 16.2766 57.8751 16.2766H59.7383V14.9734H57.7819V7.9734H59.8874V6.67021H57.7819V4.00798H56.4404V5.79521C56.4404 6.11791 56.3814 6.34441 56.2634 6.47473C56.1454 6.60505 55.925 6.67021 55.602 6.67021H54.7077V7.9734H56.2914V14.6941C56.2914 15.1658 56.4249 15.5474 56.692 15.8391ZM62.3375 4.18484C62.4803 4.33998 62.7132 4.41755 63.0362 4.41755C63.3591 4.41755 63.592 4.33998 63.7349 4.18484C63.8777 4.0297 63.9491 3.82802 63.9491 3.57979V3.33777C63.9491 3.08954 63.8777 2.88786 63.7349 2.73271C63.592 2.57757 63.3591 2.5 63.0362 2.5C62.7132 2.5 62.4803 2.57757 62.3375 2.73271C62.1946 2.88786 62.1232 3.08954 62.1232 3.33777V3.57979C62.1232 3.82802 62.1946 4.0297 62.3375 4.18484ZM63.7814 6.67021H62.2909V16.2766H63.7814V6.67021ZM66.9489 6.67021V16.2766H68.4394V9.6117C68.4394 9.30142 68.5047 9.03147 68.6351 8.80186C68.7655 8.57225 68.9363 8.38298 69.1475 8.23404C69.3586 8.08511 69.6008 7.9734 69.8741 7.89894C70.1474 7.82447 70.4331 7.78723 70.7312 7.78723C71.4392 7.78723 71.9609 8.00443 72.2963 8.43883C72.6316 8.87323 72.7993 9.51861 72.7993 10.375V16.2766H74.2899V9.6117C74.2899 9.30142 74.352 9.03147 74.4762 8.80186C74.6004 8.57225 74.7681 8.38298 74.9793 8.23404C75.1904 8.08511 75.4295 7.9734 75.6966 7.89894C75.9637 7.82447 76.2462 7.78723 76.5443 7.78723C77.2772 7.78723 77.8113 8.00443 78.1467 8.43883C78.4821 8.87323 78.6498 9.51861 78.6498 10.375V16.2766H80.1403V10.1144C80.1403 8.94769 79.864 8.04477 79.3112 7.40559C78.7584 6.7664 77.9914 6.44681 77.0101 6.44681C76.1903 6.44681 75.5413 6.64229 75.0631 7.03325C74.5849 7.4242 74.2588 7.88032 74.0849 8.4016H74.0477C73.7868 7.70656 73.3893 7.20701 72.8552 6.90293C72.3211 6.59885 71.7373 6.44681 71.1038 6.44681C70.7312 6.44681 70.4082 6.49335 70.1349 6.58644C69.8617 6.67952 69.6226 6.80674 69.4176 6.96808C69.2127 7.12943 69.0388 7.3187 68.8959 7.5359C68.7531 7.7531 68.6258 7.98581 68.514 8.23404H68.4394V6.67021H66.9489ZM88.9998 15.8298C89.242 16.1277 89.6426 16.2766 90.2016 16.2766H91.04V14.9734H89.9408V9.68617C89.9408 8.66844 89.6178 7.87412 88.9719 7.30319C88.326 6.73227 87.4192 6.44681 86.2516 6.44681C85.3821 6.44681 84.6617 6.62987 84.0903 6.99601C83.5189 7.36215 83.1028 7.80585 82.842 8.32713L83.7363 9.16489C83.9971 8.73049 84.3232 8.38298 84.7145 8.12234C85.1058 7.8617 85.5933 7.73138 86.1771 7.73138C86.9472 7.73138 87.5186 7.91135 87.8912 8.27128C88.2639 8.63121 88.4502 9.15248 88.4502 9.83511V10.7846H86.5497C85.1461 10.7846 84.112 11.0266 83.4475 11.5106C82.783 11.9947 82.4507 12.6897 82.4507 13.5957C82.4507 14.4894 82.7333 15.1968 83.2984 15.7181C83.8636 16.2394 84.6555 16.5 85.674 16.5C86.3448 16.5 86.9224 16.3511 87.4068 16.0532C87.8912 15.7553 88.239 15.3085 88.4502 14.7128H88.5433C88.6055 15.1596 88.7576 15.5319 88.9998 15.8298ZM86.941 15.1037C86.6305 15.1906 86.2889 15.234 85.9162 15.234C85.3324 15.234 84.8697 15.1037 84.5282 14.8431C84.1866 14.5824 84.0158 14.2163 84.0158 13.7447V13.3537C84.0158 12.8821 84.2114 12.5222 84.6027 12.2739C84.994 12.0257 85.6181 11.9016 86.4752 11.9016H88.4502V13.484C88.4502 13.7323 88.3881 13.9619 88.2639 14.1729C88.1397 14.3839 87.9658 14.57 87.7422 14.7314C87.5186 14.8927 87.2515 15.0168 86.941 15.1037ZM93.5647 15.8391C93.8317 16.1308 94.2261 16.2766 94.7478 16.2766H96.0707V14.9734H94.6546V2.5H93.1641V14.7314C93.1641 15.1782 93.2976 15.5474 93.5647 15.8391ZM107.935 3.28191H103.575V16.2766H107.935C108.742 16.2766 109.475 16.1401 110.133 15.867C110.792 15.594 111.354 15.1875 111.82 14.6476C112.285 14.1077 112.643 13.4313 112.891 12.6184C113.139 11.8054 113.264 10.859 113.264 9.77926C113.264 8.69946 113.139 7.75311 112.891 6.94016C112.643 6.12721 112.285 5.4508 111.82 4.9109C111.354 4.37101 110.792 3.96454 110.133 3.69149C109.475 3.41844 108.742 3.28191 107.935 3.28191ZM109.407 14.629C108.96 14.809 108.469 14.8989 107.935 14.8989H105.14V4.65957H107.935C108.469 4.65957 108.96 4.74956 109.407 4.92952C109.854 5.10949 110.239 5.37323 110.562 5.72074C110.885 6.06826 111.136 6.49335 111.317 6.99601C111.497 7.49867 111.587 8.07269 111.587 8.71809V10.8404C111.587 11.4858 111.497 12.0598 111.317 12.5625C111.136 13.0652 110.885 13.4902 110.562 13.8378C110.239 14.1853 109.854 14.449 109.407 14.629ZM123.325 6.67021H121.853L119.524 13.2048L119.002 14.7686H118.909L118.462 13.2048L116.152 6.67021H114.661L118.257 16.6489L117.53 18.6968H116.021V20H116.785C117.133 20 117.428 19.9752 117.67 19.9255C117.912 19.8759 118.114 19.7952 118.276 19.6835C118.437 19.5718 118.574 19.4198 118.685 19.2274C118.797 19.035 118.909 18.7961 119.021 18.5106L123.325 6.67021ZM125.225 6.67021V16.2766H126.716V9.6117C126.716 9.30142 126.781 9.03147 126.911 8.80186C127.042 8.57225 127.219 8.38298 127.443 8.23404C127.666 8.0851 127.918 7.9734 128.197 7.89894C128.477 7.82447 128.765 7.78723 129.063 7.78723C130.517 7.78723 131.243 8.64981 131.243 10.375V16.2766H132.734V10.1144C132.734 8.94769 132.445 8.04477 131.868 7.40559C131.29 6.7664 130.504 6.44681 129.511 6.44681C128.79 6.44681 128.216 6.60816 127.787 6.93085C127.359 7.25355 127.026 7.68794 126.79 8.23404H126.716V6.67021H125.225ZM141.593 15.8298C141.836 16.1277 142.236 16.2766 142.795 16.2766H143.634V14.9734H142.534V9.68617C142.534 8.66844 142.211 7.87412 141.566 7.30319C140.92 6.73227 140.013 6.44681 138.845 6.44681C137.976 6.44681 137.255 6.62987 136.684 6.99601C136.113 7.36215 135.696 7.80585 135.436 8.32713L136.33 9.16489C136.591 8.73049 136.917 8.38298 137.308 8.12234C137.699 7.8617 138.187 7.73138 138.771 7.73138C139.541 7.73138 140.112 7.91135 140.485 8.27128C140.858 8.63121 141.044 9.15248 141.044 9.83511V10.7846H139.143C137.74 10.7846 136.706 11.0266 136.041 11.5106C135.377 11.9947 135.044 12.6897 135.044 13.5957C135.044 14.4894 135.327 15.1968 135.892 15.7181C136.457 16.2394 137.249 16.5 138.268 16.5C138.938 16.5 139.516 16.3511 140 16.0532C140.485 15.7553 140.833 15.3085 141.044 14.7128H141.137C141.199 15.1596 141.351 15.5319 141.593 15.8298ZM139.535 15.1037C139.224 15.1906 138.883 15.234 138.51 15.234C137.926 15.234 137.463 15.1037 137.122 14.8431C136.78 14.5824 136.609 14.2163 136.609 13.7447V13.3537C136.609 12.8821 136.805 12.5222 137.196 12.2739C137.588 12.0257 138.212 11.9016 139.069 11.9016H141.044V13.484C141.044 13.7323 140.982 13.9619 140.858 14.1729C140.733 14.3839 140.559 14.57 140.336 14.7314C140.112 14.8927 139.845 15.0168 139.535 15.1037ZM145.758 6.67021V16.2766H147.248V9.6117C147.248 9.30142 147.314 9.03147 147.444 8.80186C147.574 8.57225 147.745 8.38298 147.956 8.23404C148.167 8.0851 148.41 7.9734 148.683 7.89894C148.956 7.82447 149.242 7.78723 149.54 7.78723C150.248 7.78723 150.77 8.00443 151.105 8.43883C151.44 8.87323 151.608 9.51861 151.608 10.375V16.2766H153.099V9.6117C153.099 9.30142 153.161 9.03147 153.285 8.80186C153.409 8.57225 153.577 8.38298 153.788 8.23404C153.999 8.0851 154.238 7.9734 154.505 7.89894C154.773 7.82447 155.055 7.78723 155.353 7.78723C156.086 7.78723 156.62 8.00443 156.956 8.43883C157.291 8.87323 157.459 9.51861 157.459 10.375V16.2766H158.949V10.1144C158.949 8.94769 158.673 8.04477 158.12 7.40559C157.567 6.7664 156.8 6.44681 155.819 6.44681C154.999 6.44681 154.35 6.64229 153.872 7.03325C153.394 7.4242 153.068 7.88032 152.894 8.4016H152.857C152.596 7.70656 152.198 7.20701 151.664 6.90293C151.13 6.59885 150.546 6.44681 149.913 6.44681C149.54 6.44681 149.217 6.49335 148.944 6.58644C148.671 6.67952 148.431 6.80674 148.226 6.96808C148.022 7.12943 147.848 7.3187 147.705 7.5359C147.562 7.7531 147.435 7.98581 147.323 8.23404H147.248V6.67021H145.758ZM162.07 4.18484C162.213 4.33998 162.446 4.41755 162.769 4.41755C163.092 4.41755 163.325 4.33998 163.467 4.18484C163.61 4.0297 163.682 3.82802 163.682 3.57979V3.33777C163.682 3.08954 163.61 2.88786 163.467 2.73271C163.325 2.57757 163.092 2.5 162.769 2.5C162.446 2.5 162.213 2.57757 162.07 2.73271C161.927 2.88786 161.856 3.08954 161.856 3.33777V3.57979C161.856 3.82802 161.927 4.0297 162.07 4.18484ZM163.514 16.2766V6.67021H162.023V16.2766H163.514ZM168.451 16.1463C168.986 16.3821 169.588 16.5 170.259 16.5C171.178 16.5 171.945 16.2952 172.56 15.8856C173.175 15.4761 173.637 14.9238 173.948 14.2287L172.867 13.5027C172.333 14.6197 171.464 15.1782 170.259 15.1782C169.377 15.1782 168.709 14.9082 168.256 14.3684C167.802 13.8285 167.576 13.1365 167.576 12.2926V10.6543C167.576 10.2323 167.632 9.84442 167.743 9.49069C167.855 9.13697 168.023 8.83289 168.247 8.57846C168.47 8.32402 168.75 8.12544 169.085 7.98271C169.42 7.83998 169.812 7.76862 170.259 7.76862C170.855 7.76862 171.352 7.90514 171.749 8.17819C172.147 8.45124 172.433 8.83599 172.606 9.33245L173.855 8.69947C173.569 8.02925 173.137 7.48626 172.56 7.07048C171.982 6.6547 171.215 6.44681 170.259 6.44681C169.588 6.44681 168.986 6.56472 168.451 6.80053C167.917 7.03635 167.467 7.37145 167.101 7.80585C166.734 8.24025 166.455 8.76773 166.262 9.3883C166.07 10.0089 165.973 10.7039 165.973 11.4734C165.973 12.2429 166.07 12.9379 166.262 13.5585C166.455 14.1791 166.734 14.7066 167.101 15.141C167.467 15.5754 167.917 15.9105 168.451 16.1463ZM176.696 15.988C177.299 16.3293 178.047 16.5 178.941 16.5C180.047 16.5 180.916 16.2332 181.55 15.6995C182.183 15.1658 182.5 14.4335 182.5 13.5027C182.5 12.7704 182.276 12.1778 181.829 11.7247C181.382 11.2717 180.624 10.9645 179.556 10.8032L178.811 10.6915C178.215 10.5922 177.758 10.4371 177.441 10.2261C177.125 10.0151 176.966 9.67376 176.966 9.20213C176.966 8.74291 177.125 8.37988 177.441 8.11303C177.758 7.84619 178.227 7.71277 178.848 7.71277C179.469 7.71277 179.985 7.83378 180.395 8.0758C180.805 8.31782 181.115 8.58776 181.326 8.88564L182.314 7.99202C181.916 7.50798 181.454 7.12943 180.926 6.85638C180.398 6.58333 179.742 6.44681 178.96 6.44681C178.475 6.44681 178.022 6.50576 177.6 6.62367C177.177 6.74158 176.814 6.91844 176.51 7.15426C176.205 7.39007 175.966 7.68484 175.792 8.03856C175.619 8.39229 175.532 8.80496 175.532 9.2766C175.532 9.72341 175.609 10.1082 175.765 10.4309C175.92 10.7535 176.137 11.0235 176.417 11.2407C176.696 11.4579 177.022 11.6316 177.395 11.762C177.767 11.8923 178.177 11.9885 178.625 12.0505L179.388 12.1622C180.022 12.2615 180.46 12.4446 180.702 12.7114C180.944 12.9783 181.065 13.2979 181.065 13.6702C181.065 14.1667 180.888 14.5514 180.534 14.8245C180.18 15.0975 179.687 15.234 179.053 15.234C178.444 15.234 177.91 15.1068 177.451 14.8524C176.991 14.598 176.575 14.2349 176.202 13.7633L175.14 14.6197C175.575 15.1906 176.094 15.6467 176.696 15.988Z'
			/>
		</SvgIcon>
	)
}

export default CompanyFullLogo;