import { visit } from 'unist-util-visit';

export function remarkPlugin() {
    return function parseTree(tree, file) {
        visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node) => {
            if (node.name === 'brand-name') {
                node.type = 'text';
                node.value = "MyBrand"
            }
            node.type = 'text'
        });
    };
};