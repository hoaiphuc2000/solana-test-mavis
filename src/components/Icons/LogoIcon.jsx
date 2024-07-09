const LogoIcon = ({ className, enableText = false }) => (
  <svg
    viewBox="0 0 204 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_600_19612)">
      <path
        d="M37.2739 2.82911L34.4281 0L18.4648 2.82911H37.2739Z"
        fill="#5EE5D5"
      />
      <path
        d="M12.6382 32L18.4649 26.2093L24.2916 32H12.6382Z"
        fill="#5EE5D5"
      />
      <path
        d="M10.1118 26.0284L10.1148 26.0314L8.87544 27.2631L7.6361 26.0314L7.63908 26.0284H0.799805L6.80655 31.998H10.4758L16.4826 26.0284H10.1118Z"
        fill="#5EE5D5"
      />
      <path
        d="M46.55 22.9759V7.20128L43.4179 4.08847H18.4648V32H46.55V30.4688H27.9449L29.3414 29.0809H46.55V27.4163H30.9508L32.3473 26.0284H46.55V24.3638H34.0223L35.4188 22.9759H46.55V22.9759ZM31.6391 18.0749L34.0263 15.7025L36.4135 18.0749L34.0263 20.4473L31.6391 18.0749Z"
        fill="#5EE5D5"
      />
      {enableText && (
        <>
          <path
            d="M64.6073 9.42247V22.7288H74.6762V9.42247H77.9964V22.7288H88.0653V9.42247H91.3855V22.8612C90.8315 23.4296 90.2834 23.9615 89.7384 24.4577C89.1933 24.9549 88.6363 25.4778 88.0644 26.0274H77.9954C77.4414 25.4778 76.8884 24.9322 76.3353 24.3905C75.7813 23.8498 75.2283 23.2952 74.6752 22.7268V26.0264H64.6063C63.4813 24.944 62.3743 23.8438 61.2861 22.7268V9.42247H64.6063H64.6073Z"
            fill="white"
          />
          <path
            d="M96.7687 9.42247V16.1552H106.838V9.42247H110.158V26.0284H106.838V19.4282H96.7687V26.0284H93.4485V9.42247H96.7687V9.42247Z"
            fill="white"
          />
          <path
            d="M125.501 26.0284V19.4548H115.647V26.0284H112.193V12.7488C112.746 12.1992 113.304 11.6575 113.867 11.1257C114.429 10.5938 115.023 10.0432 115.647 9.47585H125.501C126.054 10.0442 126.603 10.5978 127.149 11.1395C127.693 11.6812 128.233 12.2615 128.769 12.8822V26.0294H125.502L125.501 26.0284ZM115.513 12.7488V16.1819H125.501V12.7488H115.513Z"
            fill="white"
          />
          <path
            d="M134.257 9.42247V22.7288H147.646V26.0284H134.257L130.937 22.7288V9.42247H134.257V9.42247Z"
            fill="white"
          />
          <path
            d="M152.975 9.42247V22.7288H166.364V26.0284H152.975L149.655 22.7288V9.42247H152.975Z"
            fill="white"
          />
          <path
            d="M184.948 12.8289H171.666V16.1018H181.655V19.3481H171.666V22.7545H184.948V26.0274H171.666C171.112 25.4778 170.564 24.9272 170.019 24.3776C169.474 23.828 168.925 23.2428 168.372 22.621V12.8279C169.443 11.6219 170.585 10.4861 171.8 9.42148H184.948V12.8279V12.8289Z"
            fill="white"
          />
          <path
            d="M190.438 9.47585V16.0494H200.507V9.47585H203.8V16.1819L200.64 19.3224H203.8V26.0284H200.507V19.3224H190.599C190.599 20.4938 190.603 21.6246 190.612 22.7159C190.621 23.8072 190.625 24.9114 190.625 26.0294H187.143V19.3234H190.437L187.143 16.0504V9.47585H190.437H190.438Z"
            fill="white"
          />
        </>
      )}
    </g>
    <defs>
      <clipPath id="clip0_600_19612">
        <rect
          width="203"
          height="32"
          fill="white"
          transform="translate(0.799805)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default LogoIcon;
