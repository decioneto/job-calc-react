import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
    render() {
        return (
            <Link to="/">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="208"
                    height="48"
                    fill="none"
                    viewBox="0 0 208 48"
                >
                    <path
                        fill="#FCFDFF"
                        d="M82.83 12.452V29.81c0 1.083-.18 2.063-.538 2.938a6.084 6.084 0 01-1.48 2.248c-.627.622-1.4 1.106-2.32 1.452-.92.346-1.95.518-3.094.518-2.174 0-3.867-.576-5.078-1.728-1.21-1.176-1.984-2.732-2.32-4.668l4.103-.864c.201 1.037.56 1.844 1.076 2.42.538.553 1.266.83 2.186.83.874 0 1.591-.277 2.152-.83.583-.576.874-1.452.874-2.628v-13.31h-7.398v-3.735H82.83zM94.9 37c-1.256 0-2.388-.219-3.397-.657a7.212 7.212 0 01-2.555-1.902c-.695-.83-1.233-1.82-1.614-2.973-.382-1.175-.572-2.49-.572-3.941 0-1.453.19-2.755.572-3.907.38-1.153.919-2.132 1.614-2.94a7.21 7.21 0 012.556-1.9c1.008-.439 2.14-.658 3.396-.658 1.255 0 2.387.22 3.396.657a6.835 6.835 0 012.556 1.902c.718.807 1.267 1.786 1.648 2.939.381 1.152.572 2.454.572 3.907 0 1.452-.191 2.766-.572 3.941-.381 1.153-.93 2.144-1.648 2.973a6.836 6.836 0 01-2.556 1.902c-1.009.438-2.14.657-3.396.657zm0-3.561c1.143 0 2.04-.357 2.69-1.072.65-.714.975-1.763.975-3.146v-3.354c0-1.36-.325-2.397-.975-3.112-.65-.714-1.547-1.072-2.69-1.072-1.121 0-2.007.358-2.657 1.072-.65.715-.975 1.752-.975 3.112v3.354c0 1.383.325 2.431.975 3.146.65.715 1.536 1.072 2.657 1.072zM106.888 11h4.304v10.51h.135c.313-1.037.907-1.855 1.782-2.454.874-.623 1.894-.934 3.06-.934 2.242 0 3.946.819 5.111 2.455 1.189 1.614 1.783 3.93 1.783 6.95 0 3.042-.594 5.382-1.783 7.018-1.165 1.637-2.869 2.455-5.111 2.455-1.166 0-2.186-.311-3.06-.934-.852-.622-1.446-1.452-1.782-2.489h-.135v3.008h-4.304V11zm7.902 22.335c1.121 0 2.029-.38 2.724-1.14.695-.762 1.043-1.787 1.043-3.078v-3.112c0-1.29-.348-2.316-1.043-3.077-.695-.784-1.603-1.175-2.724-1.175-1.031 0-1.894.265-2.589.795-.673.53-1.009 1.233-1.009 2.109v5.74c0 .944.336 1.67 1.009 2.178.695.507 1.558.76 2.589.76zM132.802 37c-1.682 0-3.094-.288-4.237-.864a10.018 10.018 0 01-3.027-2.455l2.623-2.628c.65.76 1.356 1.36 2.119 1.798.784.438 1.681.657 2.69.657 1.031 0 1.771-.184 2.219-.553.471-.369.707-.876.707-1.521 0-.53-.169-.946-.505-1.245-.314-.323-.863-.542-1.648-.657l-1.748-.242c-1.906-.254-3.363-.807-4.372-1.66-.986-.876-1.48-2.143-1.48-3.803 0-.876.157-1.66.471-2.35a4.82 4.82 0 011.345-1.799 5.766 5.766 0 012.085-1.14c.83-.277 1.749-.416 2.758-.416.852 0 1.603.07 2.253.208a7.03 7.03 0 011.816.553c.538.23 1.031.53 1.479.899.449.346.886.738 1.312 1.175l-2.522 2.593a6.666 6.666 0 00-1.85-1.382 5.071 5.071 0 00-2.354-.554c-.941 0-1.625.173-2.051.519-.404.346-.605.795-.605 1.348 0 .6.168 1.06.504 1.383.359.3.953.519 1.782.657l1.783.242c3.788.553 5.683 2.328 5.683 5.325 0 .876-.179 1.682-.538 2.42a5.471 5.471 0 01-1.446 1.867c-.628.507-1.39.91-2.287 1.21-.874.277-1.861.415-2.959.415zM153.215 37c-1.547 0-2.948-.254-4.204-.76a8.736 8.736 0 01-3.194-2.352c-.875-1.037-1.547-2.316-2.018-3.837-.471-1.545-.706-3.331-.706-5.36 0-2.028.235-3.826.706-5.393.471-1.59 1.143-2.916 2.018-3.976a8.762 8.762 0 013.194-2.455c1.256-.553 2.657-.83 4.204-.83 2.107 0 3.856.461 5.246 1.383 1.39.922 2.5 2.317 3.329 4.184l-3.8 2.074c-.336-1.083-.885-1.948-1.648-2.593-.762-.668-1.804-1.003-3.127-1.003-1.659 0-2.982.577-3.968 1.73-.964 1.152-1.446 2.765-1.446 4.84v3.803c0 2.097.482 3.71 1.446 4.84.986 1.107 2.309 1.66 3.968 1.66 1.323 0 2.399-.369 3.228-1.107a6.322 6.322 0 001.85-2.731l3.598 2.178c-.852 1.798-1.984 3.204-3.396 4.218-1.413.991-3.173 1.487-5.28 1.487zM178.322 36.585c-.942 0-1.693-.276-2.253-.83-.538-.576-.875-1.337-1.009-2.282h-.202c-.291 1.176-.885 2.063-1.782 2.663-.897.576-2.007.864-3.329.864-1.794 0-3.173-.484-4.137-1.452-.964-.968-1.446-2.259-1.446-3.873 0-1.867.65-3.25 1.951-4.148 1.3-.922 3.15-1.383 5.548-1.383h2.993V24.83c0-1.014-.257-1.798-.773-2.351-.516-.553-1.345-.83-2.489-.83-1.008 0-1.827.23-2.454.691a6.418 6.418 0 00-1.547 1.59l-2.556-2.35a7.347 7.347 0 012.589-2.49c1.076-.645 2.5-.968 4.271-.968 2.376 0 4.181.553 5.414 1.66 1.233 1.106 1.85 2.697 1.85 4.771v8.506h1.748v3.526h-2.387zm-7.129-2.8c.964 0 1.782-.22 2.454-.657.673-.438 1.009-1.084 1.009-1.936v-2.386h-2.757c-2.242 0-3.363.737-3.363 2.213v.587c0 .738.224 1.291.673 1.66.47.346 1.132.519 1.984.519zM188.497 36.585c-1.479 0-2.566-.38-3.261-1.14-.695-.761-1.043-1.833-1.043-3.216V11h4.304v22.059h2.321v3.526h-2.321zM201.005 37c-1.3 0-2.455-.219-3.463-.657a6.836 6.836 0 01-2.556-1.902c-.673-.83-1.188-1.82-1.547-2.973-.359-1.175-.538-2.49-.538-3.941 0-1.453.179-2.755.538-3.907.359-1.153.874-2.132 1.547-2.94a6.835 6.835 0 012.556-1.9c1.008-.439 2.163-.658 3.463-.658 1.771 0 3.229.404 4.372 1.21 1.166.807 2.006 1.925 2.522 3.354l-3.531 1.625c-.202-.76-.583-1.383-1.143-1.867-.538-.507-1.278-.76-2.22-.76-1.21 0-2.118.391-2.724 1.175-.582.784-.874 1.81-.874 3.077v3.285c0 1.267.292 2.293.874 3.077.606.76 1.514 1.14 2.724 1.14 1.032 0 1.827-.264 2.388-.794.56-.554.998-1.233 1.311-2.04L208 32.229c-.583 1.59-1.468 2.789-2.657 3.596-1.188.783-2.634 1.175-4.338 1.175z"
                    ></path>
                    <g clipPath="url(#clip0_116_32)">
                        <path
                            fill="#6D6D80"
                            d="M41.344 0H4.219A4.224 4.224 0 000 4.219v37.125a4.224 4.224 0 004.219 4.218h27.75c.373 0 .73-.148.994-.411l12.188-12.188c.263-.264.411-.621.411-.994V4.219A4.224 4.224 0 0041.344 0z"
                        ></path>
                        <path
                            fill="#6D6D80"
                            d="M22.781 0H4.22A4.224 4.224 0 000 4.219V22.78h22.781V0z"
                        ></path>
                        <path
                            fill="#575766"
                            d="M45.563 22.781V4.22A4.224 4.224 0 0041.343 0H22.782v22.781h22.782z"
                        ></path>
                        <path
                            fill="#414141"
                            d="M22.781 22.781v22.782h9.188c.373 0 .73-.149.994-.412l12.188-12.188c.263-.264.411-.621.411-.994V22.78h-22.78zm21.375 9.188h.001z"
                        ></path>
                        <path
                            fill="#575766"
                            d="M0 22.781v18.563a4.224 4.224 0 004.219 4.218H22.78v-22.78H0z"
                        ></path>
                        <path
                            fill="#FCFDFF"
                            d="M14.672 9.984h-1.875V8.11a1.406 1.406 0 00-2.813 0v1.875H8.11a1.406 1.406 0 000 2.813h1.875v1.875a1.406 1.406 0 002.813 0v-1.875h1.875a1.406 1.406 0 000-2.813zM37.453 12.797h-6.562a1.406 1.406 0 010-2.813h6.562a1.406 1.406 0 110 2.813zM13.38 34.172l1.349-1.35a1.406 1.406 0 10-1.989-1.988l-1.35 1.35-1.349-1.35a1.406 1.406 0 10-1.989 1.988l1.35 1.35-1.35 1.35a1.406 1.406 0 101.99 1.988l1.348-1.35 1.35 1.35a1.402 1.402 0 001.989 0c.549-.55.549-1.44 0-1.989l-1.35-1.35z"
                        ></path>
                        <path
                            fill="#F1972C"
                            d="M33.469 48c-8.013 0-14.532-6.519-14.532-14.531 0-8.013 6.52-14.532 14.532-14.532S48 25.457 48 33.47 41.481 48 33.469 48z"
                        ></path>
                        <path
                            fill="#FCFDFF"
                            d="M36.75 37.688h-6.563a1.406 1.406 0 010-2.813h6.563a1.406 1.406 0 010 2.813zM36.75 32.063h-6.563a1.406 1.406 0 010-2.813h6.563a1.406 1.406 0 010 2.813z"
                        ></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_116_32">
                            <path fill="#fff" d="M0 0H48V48H0z"></path>
                        </clipPath>
                    </defs>
                </svg>
            </Link>
        );
    }
}

export { Logo };
