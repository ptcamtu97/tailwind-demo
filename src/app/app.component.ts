import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwind-demo';
  isOpen: boolean = true;
  isDark: boolean = false;

  menuList = [
    {
      img: 'https://cdn-icons-png.flaticon.com/512/25/25694.png',
      name: 'Home',
      isSelected: true,
      type: 1
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/105/105503.png',
      name: 'Explore',
      isSelected: false,
      type: 1
    },
    {
      img: 'https://pic.onlinewebfonts.com/svg/img_239691.png',
      name: 'Shorts',
      isSelected: false,
      type: 1
    },
    {
      img: 'https://cdn1.iconfinder.com/data/icons/youtube-23/31/Vector-4-512.png',
      name: 'Subscriptions',
      isSelected: false,
      type: 1
    },
    {
      img: 'https://icon-library.com/images/white-youtube-icon/white-youtube-icon-4.jpg',
      name: 'Library',
      isSelected: false,
      type: 1
    },
    {
      img: 'https://cdn1.iconfinder.com/data/icons/youtube-23/29/Vector-9-512.png',
      name: 'History',
      isSelected: false,
      type: 1
    },
    {
      img: 'https://icon-library.com/images/google-music-icon/google-music-icon-26.jpg',
      name: 'Music',
      isSelected: false,
      type: 2
    },
    {
      img: 'https://icon-library.com/images/google-music-icon/google-music-icon-26.jpg',
      name: 'Sports',
      isSelected: false,
      type: 2
    },
    {
      img: 'https://icon-library.com/images/google-music-icon/google-music-icon-26.jpg',
      name: 'Gaming',
      isSelected: false,
      type: 2
    },
    {
      img: 'https://icon-library.com/images/google-music-icon/google-music-icon-26.jpg',
      name: 'News',
      isSelected: false,
      type: 2
    },
    {
      img: 'https://icon-library.com/images/google-music-icon/google-music-icon-26.jpg',
      name: 'Live',
      isSelected: false,
      type: 2
    },
    {
      img: 'https://icon-library.com/images/google-music-icon/google-music-icon-26.jpg',
      name: '360° Video',
      isSelected: false,
      type: 2
    }
  ];

  contentList = [
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    },
    {
      img: 'https://i.ytimg.com/vi/68rzsYLguKg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAJDC0FzOCLD_CkN9aKAwyRWZFnug',
      name: 'Đạp Sơn Hà (remix) - Là Thất Thúc Đây | 踏山河DJ - 是七叔呢',
      author: 'Moah - Nhạc Trung Channel',
      views: '554,859',
      time: '4 weeks ago'
    }
  ];

  tabList = [
    {
      name: 'All',
      isSelected: true,
    },
    {
      name: 'Pinyin',
      isSelected: false,
    },
    {
      name: 'Youth music',
      isSelected: false,
    },
    {
      name: 'Piano',
      isSelected: false,
    },
    {
      name: 'Live',
      isSelected: false,
    }
  ]

  itemClick(item: any): void {
    this.menuList.forEach(x => {
      x.isSelected = x.name === item.name;
    })
  }

  itemClickTab(item: any): void {
    this.tabList.forEach(x => {
      x.isSelected = x.name === item.name;
    })
  }
}
