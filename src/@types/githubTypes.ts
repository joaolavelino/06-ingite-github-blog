export type GitHubUser = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null | string;
  created_at: string; // ISO 8601 format date string
  email: null | string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null | boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null | string;
  type: "User"; // Could also be "Organization" in other cases
  updated_at: string; // ISO 8601 format date string
  url: string;
  user_view_type: "public" | "private"; // Assuming possible values
};

export interface GitHubLabel {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface SubIssuesSummary {
  total: number;
  completed: number;
  percent_completed: number;
}

export interface Reactions {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

export interface GitHubIssue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: GitHubUser;
  labels: GitHubLabel[];
  state: "open" | "closed";
  locked: boolean;
  assignee: GitHubUser | null;
  assignees: GitHubUser[];
  milestone: null | any; // Replace 'any' with specific milestone type if needed
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: string | null;
  sub_issues_summary: SubIssuesSummary;
  body: string;
  closed_by: GitHubUser | null;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app: null | any; // Replace 'any' with specific type if needed
  state_reason: string | null;
}
