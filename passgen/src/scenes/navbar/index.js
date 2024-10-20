import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import linkedIn from '@/assets/linkedin.svg';
const Navbar = () => {
    return (_jsx("header", { children: _jsx("nav", { children: _jsxs("div", { className: "navbar-container", children: [_jsxs("div", { className: "navbar-left", children: [_jsx("span", { className: 'logo-span-colored-1', children: "Pass" }), _jsx("span", { className: 'logo-span-colored-2', children: "Gen" })] }), _jsxs("div", { className: "navbar-right", children: [_jsx("a", { href: "https://github.com/JDDev7", target: "_blank", rel: "noreferrer", children: "Github" }), _jsx("a", { href: "https://jddev-portfolio.netlify.app", target: "_blank", rel: "noreferrer", children: "Portfolio" }), _jsx("div", { className: "social-logos", children: _jsx("a", { href: "https://www.linkedin.com/in/jdmorenopulido/", target: "_blank", rel: "noreferrer", children: _jsx("img", { src: linkedIn, alt: "" }) }) })] })] }) }) }));
};
export default Navbar;
