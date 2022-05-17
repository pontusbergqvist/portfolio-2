import { BLOCKS } from "@contentful/rich-text-types";

const options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node: any, children: any) => (
			<p className="my-2">
				{children}
			</p>
		),
		[BLOCKS.HEADING_6]: (node: any, children: any) => (
			<span className="text-accent">{children}</span>
		),
		[BLOCKS.UL_LIST]: (node: any, children: any) => (
			<ul style={{ listStyle: "disc", marginLeft: 18}}>{children}</ul>
		),
		[BLOCKS.LIST_ITEM]: (node: any, children: any)  => (
			<li>{children}</li>
		)
	}
}

export default options;
