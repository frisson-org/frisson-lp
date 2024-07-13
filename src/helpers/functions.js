export const getCurrentYear = () => {
	return new Date().getFullYear();
};

export const responsiveUp = ( breakpoint = 992 ) => {
	return window.matchMedia( `(min-width: ${ breakpoint }px)` ).matches;
}

export const responsiveDown = ( breakpoint = 991 ) => {
	return window.matchMedia( `(max-width: ${ breakpoint }px)` ).matches;
}

export const isHover = window.matchMedia( '(hover: hover)' ).matches;
