import { User } from "firebase/auth"
import { Game } from "@/lib/game/Game"
import { http } from "@/lib/http"

export class GameService {
  async createNewGame(user: User | null) {
    if (!user) throw new Error("User is not logged in")

    const result = await http.post<Game>("/api/games", { user })
    return result.data
  }
  async getGames() {
    const result = await http.get<Game[]>("/api/games")
    return result.data
  }
}
