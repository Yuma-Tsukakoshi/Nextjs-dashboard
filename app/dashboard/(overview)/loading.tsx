import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}
// 特別なファイルシステム Loading 自動検知
// (overview)フォルダを適応することで他のページにもスケルトンが反映されるのを防ぐ
// ページ単位がloading.tsx 自動的にsuspenceをwrappingしてくれてる⇒コンポネントごとに表示までに差が出る
// suspenceは、コンポーネント単位でローディングを表示させる⇒同時に複数のコンポーネントをローディングさせることができる
