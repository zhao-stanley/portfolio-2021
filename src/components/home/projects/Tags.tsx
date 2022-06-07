import { Tag } from "./Tag";

export const Tags = ({ tagsArr }: { tagsArr: string[] }) => {
  let tags: JSX.Element[] = [];
  tagsArr.forEach((e) => {
    switch (e) {
      default:
        tags.push(<Tag background="bg-gray-400">{e}</Tag>);
        break;
      case "html":
        tags.push(
          <Tag background="bg-gradient-to-r from-orange-600 to-orange-700">
            HTML
          </Tag>
        );
        break;
      case "js":
        tags.push(
          <Tag background="bg-gradient-to-r from-yellow-500 to-yellow-700">
            JavaScript
          </Tag>
        );
        break;
      case "css":
        tags.push(
          <Tag background="bg-gradient-to-r from-blue-400 to-blue-500">CSS</Tag>
        );
        break;
      case "njs":
        tags.push(
          <Tag background="bg-gradient-to-r from-green-500 to-green-600">
            Node.js
          </Tag>
        );
        break;
      case "ts":
        tags.push(<Tag background="bg-blue-500">Typescript</Tag>);
        break;
      case "r":
        tags.push(<Tag background="bg-[#25caf3]">React</Tag>);
        break;
      case "tw":
        tags.push(
          <Tag background="bg-gradient-to-r from-cyan-600 to-teal-500">
            TailwindCSS
          </Tag>
        );
        break;
      case "nxjs":
        tags.push(
          <Tag background="bg-gradient-to-tr from-black to-gray-700">
            Next.js
          </Tag>
        );
        break;
      case "djs":
        tags.push(<Tag background="bg-[#5865F2]">discord.js</Tag>);
        break;
    }
  });
  return <div className="flex flex-row gap-2 flex-wrap">{tags}</div>;
};
