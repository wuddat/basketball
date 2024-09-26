import LinkList from "@/app/components/LinkList";
import { addPlayer, getPlayersFromTeam } from "@/app/database";
import { revalidatePath } from "next/cache";

interface IPage {
  params: {
    leagueId: string;
    seasonId: string;
    teamId: string;
    playerId: string;
  };
}

export default async function PlayerContent({ params }: IPage) {
  const { leagueId, seasonId, teamId, playerId } = params;
  return (

    <main className="flex-1 p-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-black">Player Profile</h2>
        <h3 className="text-2xl font-semibold mb-6 text-black">{playerId}</h3>
      </div>
    </main>
  );
}








//   import { revalidatePath } from "next/cache";
// import { addSeason, addTeam, getSeasons } from "@/app/database";
// import LinkList from "@/app/components/LinkList";

// interface LeaguePageProps {
//   params: { leagueId: string };
// }

// export default async function LeaguePage({ params }: LeaguePageProps) {
//   const seasons = await getSeasons(params.leagueId);
//   return (
//     <div className=' bg-white/75 mt-20 h-3/4'>
//       <h1>Seasons</h1>
//       <LinkList data={seasons} slug={`/admin/${params.leagueId}`} />
//       <div className="min-w-fill grid place-items-center">
//         <div className="text-center">
//           <form className=" bg-white/10 border-black border justify-center align-center"
//             action={async (formData) => {
//               "use server";
//               const seasonName = formData.get("seasonName") as string;
//               await addSeason(seasonName, params.leagueId);
//               revalidatePath("/");
//             }}
//           >
//             <h3>Add A Season</h3>
//             <div className="my-2">
//               <label htmlFor="seasonName">Season Name: </label>
//               <input type="text" id="seasonName" name="seasonName" autoComplete="off" />
//             </div>
//             <div className="text-left">
//               <button className="ml-0" type="submit">Add Season</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }