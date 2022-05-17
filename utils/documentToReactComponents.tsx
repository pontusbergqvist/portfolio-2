import { BLOCKS } from "@contentful/rich-text-types";

const options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (children: any) => (
			<p className="my-2">
				{children}
			</p>
		),
		[BLOCKS.HEADING_6]: (children: any) => (
			<span className="text-accent">{children}</span>
		),
		[BLOCKS.UL_LIST]: (children: any) => (
			<ul style={{ listStyle: "disc", marginLeft: 18}}>{children}</ul>
		),
		[BLOCKS.LIST_ITEM]: (children: any)  => (
			<li>{children}</li>
		)
	}
}

export default options;
