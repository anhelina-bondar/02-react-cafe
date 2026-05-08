import css from "./Notification.module.css";
import VoteStats from "../VoteStats/VoteStats";
import type { Votes } from "../../types/votes";
interface NotificationProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function Notification({
  votes,
  totalVotes,
  positiveRate,
}: NotificationProps) {
  return totalVotes > 0 ? (
    <VoteStats
      votes={votes}
      totalVotes={totalVotes}
      positiveRate={positiveRate}
    />
  ) : (
    <p className={css.message}>No feedback yet</p>
  );
}
