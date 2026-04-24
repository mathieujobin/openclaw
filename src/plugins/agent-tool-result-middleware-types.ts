import type { AgentToolResult as PiAgentToolResult } from "@mariozechner/pi-agent-core";

export type OpenClawAgentToolResult<TResult = unknown> = PiAgentToolResult<TResult>;

export type AgentToolResultMiddlewareHarness = "pi" | "codex-app-server";

export type AgentToolResultMiddlewareEvent = {
  threadId?: string;
  turnId?: string;
  toolCallId: string;
  toolName: string;
  args: Record<string, unknown>;
  cwd?: string;
  isError?: boolean;
  result: OpenClawAgentToolResult<unknown>;
};

export type AgentToolResultMiddlewareContext = {
  harness: AgentToolResultMiddlewareHarness;
  agentId?: string;
  sessionId?: string;
  sessionKey?: string;
  runId?: string;
};

export type AgentToolResultMiddlewareResult = {
  result: OpenClawAgentToolResult<unknown>;
};

export type AgentToolResultMiddleware = (
  event: AgentToolResultMiddlewareEvent,
  ctx: AgentToolResultMiddlewareContext,
) => Promise<AgentToolResultMiddlewareResult | void> | AgentToolResultMiddlewareResult | void;

export type AgentToolResultMiddlewareOptions = {
  harnesses?: AgentToolResultMiddlewareHarness[];
};
