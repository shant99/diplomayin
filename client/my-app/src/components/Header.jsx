import SettingsIcon from "./SettingsIcon";
import UserIcon from "./UserIcon";

export default function Header() {
	return (
		<header className="w-full flex items-center flex-row justify-between p-4 shadow-md bg-white header">
			<p className="text-lg font-bold text-gray-800 logo">
				Իրական ժամանակում լոկալ քոմփյութերային ցանցի բեռնվածության համակարգ
			</p>
			<div className="flex items-center">
				<div
					className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
					style={{ display: "flex" }}
				>
					<UserIcon />
					<SettingsIcon />
				</div>
			</div>
		</header>
	);
}
