import { useEffect } from "react";

export const PageBase = props => {

	const { title = "" , children } = props;
	
	useEffect(() => {
		document.title = (title || "#WEB_TITLE") + " ";  // #WEB_TITLE change for the name of your website
	},[title]);
	
	return children;
};